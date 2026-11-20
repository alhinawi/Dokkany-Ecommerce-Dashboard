// Customer-facing views never show a user's real email address.
// Keep the first character of the local part so rows stay distinguishable.
export const maskEmail = (email: string): string => {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "\u2022\u2022\u2022";
  return `${local[0]}\u2022\u2022\u2022@${domain}`;
};
