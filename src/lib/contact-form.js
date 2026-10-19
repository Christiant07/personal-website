// Kept separate so network outcomes can be verified with mocked fetch only.
export async function sendContactMessage(endpoint, data, fetcher = fetch) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetcher(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Contact submission failed");
  } finally {
    clearTimeout(timeout);
  }
}
