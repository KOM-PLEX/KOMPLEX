"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Calculator, X, Plus } from "lucide-react";
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

interface BlogEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    height?: string;
}

export default function BlogEditor({
    value = "",
    onChange,
    height = "400px"
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
            onChange(markdown);
        }
    };

    const insertMath = () => {
        if (!mathLatex) return;
        const editor = editorRef.current?.getInstance();
        if (editor) {
            // Insert LaTeX with proper delimiters for Toast UI Editor
            editor.insertText(`$$${mathLatex}$$`);
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
            <div className="flex items-center justify-end gap-2 p-3 bg-gray-50 border-b border-gray-200 rounded-t-lg">
                <button
                    onClick={() => setShowMath(true)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-600 transition-colors duration-200"
                >
                    <Calculator className="w-4 h-4" />
                    Insert Math
                </button>
            </div>

            <Editor
                initialValue={value}
                previewStyle="vertical"
                height={height}
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                useDefaultHTMLSanitizer={true}
                ref={editorRef}
                onChange={handleEditorChange}
                toolbarItems={[
                    ["heading", "bold", "italic"],
                    // ["hr", "quote"],
                    ["ul"],
                    ["table", "link",],
                ]}
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

            {/* Math Modal */}
            {showMath && (
                <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50" >
                    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl mx-4  mb-30">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-indigo-500" />
                                Insert Mathematical Equation
                            </h3>
                            <button
                                onClick={() => setShowMath(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                LaTeX Equation
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
                                    Click on the math field above to start typing. Virtual keyboard will appear automatically.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex justify-between gap-3 w-full">
                                <button
                                    onClick={() => setShowMath(false)}
                                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={insertMath}
                                    disabled={!mathLatex.trim()}
                                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" />
                                    Insert Equation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
