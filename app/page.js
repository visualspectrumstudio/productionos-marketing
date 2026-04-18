import { v1 } from "@/content/variants/v1";

export const metadata = {
  title: v1.meta.title,
  description: v1.meta.description,
};

export default function Home() {
  return (
    <main style={{ padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "1rem" }}>
        {v1.headline}
      </h1>
      <p style={{ fontSize: "1.125rem", opacity: 0.7 }}>{v1.subheadline}</p>
    </main>
  );
}
