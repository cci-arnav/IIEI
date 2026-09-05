export const googleForms = {
  applyUrl: import.meta.env.VITE_GOOGLE_FORM_APPLY_URL ?? '',
  enquiryUrl: import.meta.env.VITE_GOOGLE_FORM_ENQUIRY_URL ?? '',
};

export function hasGoogleForm(type: 'apply' | 'enquiry') {
  return Boolean(type === 'apply' ? googleForms.applyUrl : googleForms.enquiryUrl);
}

export function getGoogleFormUrl(type: 'apply' | 'enquiry') {
  return type === 'apply' ? googleForms.applyUrl : googleForms.enquiryUrl;
}
