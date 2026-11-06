"use client";

export default function ErrorPage({ reset }) {
  return <section className="container page-head" role="alert" style={{ minHeight: "55vh" }}><span className="eyebrow">Something went wrong</span><h1>Let’s try that again.</h1><p className="muted">Your browser hit a snag while opening this page.</p><button className="button button-primary" onClick={() => reset()}>Try again</button></section>;
}
