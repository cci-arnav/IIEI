export const googleForms = {
  applyUrl: import.meta.env.VITE_GOOGLE_FORM_APPLY_URL ?? (import.meta.env.DEV ? 'DEV_MODE_NO_URL_SET' : ''),
  enquiryUrl: import.meta.env.VITE_GOOGLE_FORM_ENQUIRY_URL ?? (import.meta.env.DEV ? 'DEV_MODE_NO_URL_SET' : ''),
};

export function hasGoogleForm(type: 'apply' | 'enquiry') {
  return Boolean(type === 'apply' ? googleForms.applyUrl : googleForms.enquiryUrl);
}

export function getGoogleFormUrl(type: 'apply' | 'enquiry') {
  return type === 'apply' ? googleForms.applyUrl : googleForms.enquiryUrl;
}
