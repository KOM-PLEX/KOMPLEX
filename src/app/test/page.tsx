import MarkdownRenderer from "@/components/helper/MarkDownRenderer";

export default function Test() {

    return <div className="prose prose-lg max-w-none mt-50">
        <MarkdownRenderer content="$$\int_0^{\infty}x^2+28\,dx$$
    $$\lim_{x\rightarrow8}x+3$$
    " />
    </div>;
}