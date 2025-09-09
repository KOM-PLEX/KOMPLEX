import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css"; // important for math styling
import "highlight.js/styles/github.css"; // optional, pick your favorite highlight style


interface Props {
    content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
    return (
        <div className="prose prose-2xl max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeHighlight]}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
