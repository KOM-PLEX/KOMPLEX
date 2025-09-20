import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
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
                remarkPlugins={[remarkMath, remarkBreaks]}
                rehypePlugins={[rehypeKatex, rehypeHighlight, rehypeRaw]}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
