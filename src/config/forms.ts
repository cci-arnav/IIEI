/**
 * Normalizes environment variable values
 * - Returns empty string if undefined
 * - Trims whitespace
 * - Returns empty string if result is empty
 */
function normalizeEnvValue(value: string | undefined): string {
  return (value ?? '').trim();
}

/**
 * Validates that a URL is properly configured
 * - Must be a non-empty string
 * - Must start with https:// for security
 */
function isValidGoogleFormUrl(url: string): boolean {
  return url.length > 0 && url.startsWith('https://');
}

// Normalize environment variables at module load time
const rawApplyUrl = normalizeEnvValue(import.meta.env.VITE_GOOGLE_FORM_APPLY_URL);
const rawEnquiryUrl = normalizeEnvValue(import.meta.env.VITE_GOOGLE_FORM_ENQUIRY_URL);

// Store normalized values
export const googleForms = {
  applyUrl: rawApplyUrl,
  enquiryUrl: rawEnquiryUrl,
};

/**
 * Checks if a Google Form URL is properly configured
 */
export function hasGoogleForm(type: 'apply' | 'enquiry'): boolean {
  const url = type === 'apply' ? googleForms.applyUrl : googleForms.enquiryUrl;
  return isValidGoogleFormUrl(url);
}

/**
 * Gets the Google Form URL for the given type
 */
export function getGoogleFormUrl(type: 'apply' | 'enquiry'): string {
  return type === 'apply' ? googleForms.applyUrl : googleForms.enquiryUrl;
}

/**
 * Development-only diagnostic logging
 * Logs a warning when a required environment variable is missing or invalid
 */
if (import.meta.env.DEV) {
  if (!isValidGoogleFormUrl(googleForms.applyUrl)) {
    console.warn(
      '[FormLink] VITE_GOOGLE_FORM_APPLY_URL is not configured. ' +
      'Apply Now buttons will appear disabled. ' +
      'Set the URL in your .env file.'
    );
  }
  if (!isValidGoogleFormUrl(googleForms.enquiryUrl)) {
    console.warn(
      '[FormLink] VITE_GOOGLE_FORM_ENQUIRY_URL is not configured. ' +
      'Enquire buttons will appear disabled. ' +
      'Set the URL in your .env file.'
    );
  }
}
