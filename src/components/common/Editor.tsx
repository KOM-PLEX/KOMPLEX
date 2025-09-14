"use client";

import React, { useState, useRef, useEffect, Fragment } from "react";
import dynamic from "next/dynamic";
import { Dialog, Transition } from '@headlessui/react';
import { Calculator, CalculatorIcon, Plus } from "lucide-react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "mathlive/fonts.css";

// TypeScript declaration for math-field element
interface MathFieldElement extends HTMLElement {
    value: string;
    executeCommand: (command: string) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setOptions?: (options: any) => void;
    onInput?: (evt: Event) => void;
}

// Extend JSX namespace for math-field
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'math-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                onInput?: (evt: Event) => void;
                value?: string;
                style?: React.CSSProperties;
                'virtual-keyboard-mode'?: string;
            };
        }
    }
}

const Editor = dynamic(() => import("@toast-ui/react-editor").then(mod => ({ default: mod.Editor })), { ssr: false });

// Sanitize LaTeX output from MathLive for proper rendering
function sanitizeMathliveLatex(latex: string) {
    if (!latex) return "";

    // Step 1: normalize double backslashes → single
    latex = latex.replace(/\\\\/g, "\\");

    // Step 2: clean unnecessary escapes for punctuation and brackets
    latex = latex
        .replace(/\\_/g, "_")
        .replace(/\\\{/g, "{").replace(/\\\}/g, "}")
        .replace(/\\\[/g, "[").replace(/\\\]/g, "]")
        .replace(/\\\(/g, "(").replace(/\\\)/g, ")")
        .replace(/\\,/g, ",")
        .replace(/\\;/g, ";")
        .replace(/\\:/g, ":")
        .replace(/\\%/g, "%")
        .replace(/\\#/g, "#")
        .replace(/\\&/g, "&")
        .replace(/\\\$/g, "$")
        .replace(/\\\^/g, "^")
        .replace(/\\~/g, "~")
        .replace(/\\ /g, " "); // unescape spaces

    // Step 3: remove unnecessary MathLive spacing like \!
    latex = latex.replace(/\\!/g, ""); // optional negative thin space

    // Step 4: fix differential spacing
    latex = latex.replace(/,dx/g, "\\,dx");

    // Step 5: restore important LaTeX commands in case anything went wrong
    const importantCommands = [
        "int", "lim", "frac", "sqrt", "overline", "sum", "prod",
        "sin", "cos", "tan", "log", "quad", "qquad"
    ];
    for (const cmd of importantCommands) {
        const regex = new RegExp(`(?<!\\\\)${cmd}`, "g");
        latex = latex.replace(regex, `\\${cmd}`);
    }

    // Step 6: fix known constants
    latex = latex
        .replace(/\\exponentialE/g, "\\mathrm{e}")
        .replace(/\\pi/g, "\\pi")
        .replace(/\\infty/g, "\\infty");

    // Step 7: trim
    return latex.trim();
}



// Sanitize entire markdown content to clean up LaTeX equations
function sanitizeMarkdownContent(markdown: string) {
    return markdown.replace(/\$\$([^$]+)\$\$/g, (match, latexContent) => {
        const sanitizedLatex = sanitizeMathliveLatex(latexContent);
        return `$$${sanitizedLatex}$$`;
    });
}

interface BlogEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    height?: string;
    toolbarOptions?: string[][]; // Custom toolbar configuration
    showMathButton?: boolean; // Whether to show the math equation button
    compact?: boolean; // Compact mode - removes logo and positions math button absolutely
}

export default function BlogEditor({
    value = "",
    onChange,
    height = "400px",
    toolbarOptions = [
        ["heading", "bold", "italic"],
        ["ul"],
        ["table", "link"],
    ],
    showMathButton = true,
    compact = false
}: BlogEditorProps) {
    const editorRef = useRef<{ getInstance: () => { getMarkdown: () => string; insertText: (text: string) => void } }>(null);
    const [showMath, setShowMath] = useState(false);
    const [mathLatex, setMathLatex] = useState("");
    const [isClient, setIsClient] = useState(false);

    // Prevent hydration issues and initialize MathLive
    useEffect(() => {
        setIsClient(true);

        // Initialize MathLive when component mounts
        if (typeof window !== 'undefined') {
            import('mathlive').then((mathlive) => {
                // MathLive is now available globally
                console.log('MathLive loaded:', mathlive);
            }).catch(console.error);
        }
    }, []);

    // Initialize MathLive field when modal opens
    useEffect(() => {
        if (showMath && typeof window !== 'undefined') {
            // Wait a bit for the DOM to be ready
            setTimeout(() => {
                const mathField = document.querySelector('math-field') as MathFieldElement;
                if (mathField) {
                    // Set options for better user experience
                    mathField.setOptions?.({
                        virtualKeyboardMode: 'onfocus',
                        virtualKeyboardTheme: 'light',
                        defaultMode: 'math',
                        smartFence: true,
                        smartSuperscript: true,
                        recognizeTypedFractions: true,
                        virtualKeyboardToolbar: 'all',
                        virtualKeyboards: 'all',
                    });

                    console.log('MathField initialized:', mathField);

                    // Auto-focus the math field to show virtual keyboard
                    mathField.focus();
                }
            }, 100);
        }
    }, [showMath]);

    // Handle editor changes
    const handleEditorChange = () => {
        if (editorRef.current && onChange) {
            const markdown = editorRef.current.getInstance().getMarkdown();
            // Sanitize the entire markdown content to clean up LaTeX equations
            const sanitizedMarkdown = sanitizeMarkdownContent(markdown);
            onChange(sanitizedMarkdown);
        }
    };

    const insertMath = () => {
        if (!mathLatex) return;
        const editor = editorRef.current?.getInstance();
        if (editor) {
            // Sanitize the LaTeX output from MathLive
            const sanitizedLatex = sanitizeMathliveLatex(mathLatex);
            // Insert LaTeX with proper delimiters and add newline after
            editor.insertText(`$$${sanitizedLatex}$$\n\n`);
            handleEditorChange();
        }
        setMathLatex("");
        setShowMath(false);
    };

    // Show loading placeholder during hydration
    if (!isClient) {
        return (
            <div style={{ height: height }} className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-500">កំពុងផ្ទុក...</div>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Custom Toolbar */}
            {!compact && (
                <div className="flex items-center justify-between gap-2 p-3 bg-gray-50 border-b border-gray-200 rounded-t-xl">
                    <div className="flex items-center justify-center gap-0">
                        <span className="text-2xl font-extrabold tracking-tight text-indigo-500">KOM</span>
                        <span className="text-2xl font-extrabold tracking-tight text-black">PLEX</span>
                        <span className="text-sm text-gray-500 ml-2 font-bold">EDITOR</span>
                    </div>
                    {showMathButton && (
                        <button
                            onClick={() => setShowMath(true)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-600 transition-colors duration-200"
                        >
                            <Calculator className="w-4 h-4" />
                            បញ្ចូលសមីការ
                        </button>
                    )}
                </div>
            )}

            <div className="relative">
                <Editor
                    initialValue={value}
                    previewStyle="vertical"
                    height={height}
                    initialEditType="wysiwyg"
                    useCommandShortcut={true}
                    useDefaultHTMLSanitizer={true}
                    ref={editorRef}
                    onChange={handleEditorChange}
                    toolbarItems={toolbarOptions}
                    hooks={{
                        addImageBlobHook: (blob: Blob, callback: (url: string) => void) => {
                            // Handle image uploads if needed
                            const reader = new FileReader();
                            reader.onload = () => {
                                callback(reader.result as string);
                            };
                            reader.readAsDataURL(blob);
                        }
                    }}
                />

                {/* Compact Math Button */}
                {compact && showMathButton && (
                    <button
                        onClick={() => setShowMath(true)}
                        className="absolute top-2 right-2 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200 shadow-lg z-10"
                        title="បញ្ចូលសមីការ"
                    >
                        <CalculatorIcon className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Math Dialog */}
            <Transition appear show={showMath} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setShowMath(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4"
                                    >
                                        <Calculator className="w-5 h-5 text-indigo-500" />
                                        បញ្ចូលសមីការគណិតវិទ្យា
                                    </Dialog.Title>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            សមីការ LaTeX
                                        </label>
                                        <div className="border border-gray-300 rounded-lg p-3 bg-white">
                                            {/* @ts-expect-error - MathLive is not typed */}
                                            <math-field
                                                style={{
                                                    width: "100%",
                                                    minHeight: "80px",
                                                    fontSize: "18px",
                                                    border: "2px solid #e5e7eb",
                                                    background: "white",
                                                    borderRadius: "6px",
                                                    padding: "12px",
                                                    outline: "none"
                                                }}
                                                virtual-keyboard-mode="onfocus"
                                                onInput={(evt: Event) => setMathLatex((evt.target as MathFieldElement).value)}
                                                onClick={() => {
                                                    console.log('Math field clicked');
                                                    const mathField = document.querySelector('math-field') as MathFieldElement;
                                                    if (mathField && mathField.executeCommand) {
                                                        mathField.executeCommand('showVirtualKeyboard');
                                                    }
                                                }}
                                                value={mathLatex}
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-xs text-gray-500 text-center">
                                                ចុចលើវាលគណិតវិទ្យាខាងលើដើម្បីចាប់ផ្តើមវាយ។ ក្តារចុចនឹងបង្ហាញដោយស្វ័យប្រវត្តិ។
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end space-x-3">
                                        <button
                                            type="button"
                                            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                                            onClick={() => setShowMath(false)}
                                        >
                                            បោះបង់
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-lg bg-indigo-600 border border-indigo-600 px-4 py-2 text-sm font-medium text-white focus:outline-none hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
                                            onClick={insertMath}
                                            disabled={!mathLatex.trim()}
                                        >
                                            <Plus className="w-4 h-4" />
                                            បញ្ចូលសមីការ
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}
