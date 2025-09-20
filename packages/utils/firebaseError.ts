/**
 * Firebase Authentication Error Handler
 * Provides localized error messages for Firebase authentication errors
 */

export interface FirebaseError {
  code: string;
  customData?: {
    email?: string;
  };
}

export interface SignInMethods {
  email: string;
  methods: string[];
}

/**
 * Get localized error message for Firebase authentication errors
 * @param error - Firebase error object
 * @param context - Context of the error (login, signup, social)
 * @param signInMethods - Optional sign-in methods for account-exists-with-different-credential error
 * @returns Localized error message in Khmer
 */
export const getFirebaseErrorMessage = (
  error: FirebaseError,
  context: "login" | "signup" | "social" = "social",
  signInMethods?: SignInMethods
): string => {
  const { code } = error;

  switch (code) {
    // Account and credential errors
    case "auth/account-exists-with-different-credential": {
      if (signInMethods) {
        let methodText = "";
        if (signInMethods.methods.includes("password")) {
          methodText = "អ៊ីមែល និងពាក្យសម្ងាត់";
        }
        if (signInMethods.methods.includes("google.com")) {
          methodText += methodText ? ", Google" : "Google";
        }
        if (signInMethods.methods.includes("github.com")) {
          methodText += methodText ? ", GitHub" : "GitHub";
        }
        if (signInMethods.methods.includes("microsoft.com")) {
          methodText += methodText ? ", Microsoft" : "Microsoft";
        }
        return `គណនីនេះមានរួចហើយជាមួយ ${
          methodText !== "" ? methodText : "វិធីសាស្ត្រផ្សេង"
        }។ សូមចូលដោយប្រើវិធីសាស្ត្រដែលបានចុះឈ្មោះរួចហើយ។`;
      }
      return "គណនីនេះមានរួចហើយជាមួយវិធីសាស្ត្រផ្សេង។ សូមចូលដោយប្រើវិធីសាស្ត្រដែលបានចុះឈ្មោះរួចហើយ។";
    }

    case "auth/credential-already-in-use":
      return "ព័ត៌មានចូលគណនីនេះមានរួចហើយ។ សូមប្រើព័ត៌មានផ្សេង។";

    case "auth/invalid-credential":
      return "ព័ត៌មានចូលគណនីមិនត្រឹមត្រូវ។ សូមពិនិត្យព័ត៌មានរបស់អ្នក។";

    // User account errors
    case "auth/user-not-found":
      return "រកមិនឃើញគណនី។ សូមពិនិត្យអ៊ីមែលរបស់អ្នក។";

    case "auth/user-disabled":
      return "គណនីនេះត្រូវបានបិទ។ សូមទាក់ទងអ្នកគ្រប់គ្រង។";

    case "auth/wrong-password":
      return "ពាក្យសម្ងាត់មិនត្រឹមត្រូវ។ សូមពិនិត្យពាក្យសម្ងាត់របស់អ្នក។";

    // Email errors
    case "auth/invalid-email":
      return "អ៊ីមែលមិនត្រឹមត្រូវ។ សូមពិនិត្យអ៊ីមែលរបស់អ្នក។";

    case "auth/email-already-in-use":
    case "auth/email-already-exists":
      return "អ៊ីមែលនេះមានរួចហើយ។ សូមប្រើអ៊ីមែលផ្សេង។";

    case "auth/missing-email":
      return "ខ្វះអ៊ីមែល។ សូមបញ្ចូលអ៊ីមែល។";

    case "auth/invalid-email-verified":
      return "អ៊ីមែលមិនត្រូវបានបញ្ជាក់។ សូមបញ្ជាក់អ៊ីមែលរបស់អ្នក។";

    // Password errors
    case "auth/weak-password":
      return "ពាក្យសម្ងាត់ខ្សោយពេក។ សូមប្រើពាក្យសម្ងាត់ខ្លាំងជាងនេះ។";

    case "auth/missing-password":
      return "ខ្វះពាក្យសម្ងាត់។ សូមបញ្ចូលពាក្យសម្ងាត់។";

    // Phone number errors
    case "auth/invalid-phone-number":
      return "លេខទូរស័ព្ទមិនត្រឹមត្រូវ។ សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ។";

    case "auth/missing-phone-number":
      return "ខ្វះលេខទូរស័ព្ទ។ សូមបញ្ចូលលេខទូរស័ព្ទ។";

    case "auth/phone-number-already-exists":
      return "លេខទូរស័ព្ទនេះមានរួចហើយ។ សូមប្រើលេខទូរស័ព្ទផ្សេង។";

    // Popup and UI errors
    case "auth/popup-closed-by-user":
      return "បានបិទបង្អួចចូលគណនី។ សូមព្យាយាមម្តងទៀត។";

    case "auth/popup-blocked":
      return "បង្អួចចូលគណនីត្រូវបានទប់ស្កាត់។ សូមអនុញ្ញាតបង្អួចប៉ុបអាប់។";

    case "auth/cancelled-popup-request":
      return "សំណើចូលគណនីត្រូវបានលុបចោល។ សូមព្យាយាមម្តងទៀត។";

    // Network and timeout errors
    case "auth/network-request-failed":
      return "មានបញ្ហាក្នុងការតភ្ជាប់អ៊ីនធឺណិត។ សូមពិនិត្យការតភ្ជាប់របស់អ្នក។";

    case "auth/timeout":
      return "ពេលវេលាអស់។ សូមព្យាយាមម្តងទៀត។";

    // Rate limiting errors
    case "auth/too-many-requests":
      return "សំណើច្រើនពេក។ សូមរង់ចាំមួយភ្លែតមុនព្យាយាមម្តងទៀត។";

    case "auth/quota-exceeded":
      return "លើសពីដែនកំណត់។ សូមរង់ចាំមួយភ្លែតមុនព្យាយាមម្តងទៀត។";

    // Permission and configuration errors
    case "auth/operation-not-allowed":
      return context === "login"
        ? "វិធីសាស្ត្រចូលគណនីនេះមិនត្រូវបានអនុញ្ញាត។ សូមទាក់ទងអ្នកគ្រប់គ្រង។"
        : "វិធីសាស្ត្រចុះឈ្មោះនេះមិនត្រូវបានអនុញ្ញាត។ សូមទាក់ទងអ្នកគ្រប់គ្រង។";

    case "auth/unauthorized-domain":
      return "ដែនឈ្មោះនេះមិនត្រូវបានអនុញ្ញាត។ សូមទាក់ទងអ្នកគ្រប់គ្រង។";

    case "auth/insufficient-permission":
      return "ខ្វះសិទ្ធិ។ សូមទាក់ទងអ្នកគ្រប់គ្រង។";

    case "auth/configuration-not-found":
      return "ការកំណត់រចនាសម្ព័ន្ធមិនត្រូវបានរកឃើញ។ សូមទាក់ទងអ្នកគ្រប់គ្រង។";

    // Token errors
    case "auth/invalid-user-token":
      return "សញ្ញាសម្គាល់អ្នកប្រើមិនត្រឹមត្រូវ។ សូមចូលគណនីម្តងទៀត។";

    case "auth/user-token-expired":
      return "សញ្ញាសម្គាល់អ្នកប្រើផុតកំណត់។ សូមចូលគណនីម្តងទៀត។";

    case "auth/requires-recent-login":
      return "សូមចូលគណនីម្តងទៀតដើម្បីបន្ត។";

    // API and app errors
    case "auth/invalid-api-key":
      return "កូនសោ API មិនត្រឹមត្រូវ។ សូមទាក់ទងអ្នកគ្រប់គ្រង។";

    case "auth/app-deleted":
      return "កម្មវិធីត្រូវបានលុប។ សូមទាក់ទងអ្នកគ្រប់គ្រង។";

    // Verification errors
    case "auth/invalid-verification-code":
      return "លេខកូដបញ្ជាក់មិនត្រឹមត្រូវ។ សូមព្យាយាមម្តងទៀត។";

    case "auth/invalid-verification-id":
      return "លេខសម្គាល់បញ្ជាក់មិនត្រឹមត្រូវ។ សូមព្យាយាមម្តងទៀត។";

    case "auth/missing-verification-code":
      return "ខ្វះលេខកូដបញ្ជាក់។ សូមបញ្ចូលលេខកូដ។";

    case "auth/missing-verification-id":
      return "ខ្វះលេខសម្គាល់បញ្ជាក់។ សូមព្យាយាមម្តងទៀត។";

    case "auth/expired-action-code":
      return "លេខកូដសកម្មភាពផុតកំណត់។ សូមព្យាយាមម្តងទៀត។";

    case "auth/invalid-action-code":
      return "លេខកូដសកម្មភាពមិនត្រឹមត្រូវ។ សូមព្យាយាមម្តងទៀត។";

    // Default fallback
    default:
      const contextMessages = {
        login: "មានបញ្ហាក្នុងការចូល",
        signup: "មានបញ្ហាក្នុងការចុះឈ្មោះ",
        social: "មានបញ្ហាក្នុងការចូលដោយប្រើគណនីសង្គម។",
      };
      return contextMessages[context];
  }
};

/**
 * Check if an error is a Firebase authentication error
 * @param error - Error object to check
 * @returns True if it's a Firebase auth error
 */
export const isFirebaseAuthError = (error: unknown): error is FirebaseError => {
  return (
    error !== null &&
    typeof error === "object" &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string" &&
    (error as { code: string }).code.startsWith("auth/")
  );
};

/**
 * Get error message with proper fallback handling
 * @param error - Error object (Firebase or generic)
 * @param context - Context of the error
 * @param signInMethods - Optional sign-in methods for special cases
 * @returns Localized error message
 */
export const getErrorMessage = (
  error: unknown,
  context: "login" | "signup" | "social" = "social",
  signInMethods?: SignInMethods
): string => {
  if (isFirebaseAuthError(error)) {
    return getFirebaseErrorMessage(error, context, signInMethods);
  }

  // Fallback for non-Firebase errors
  const contextMessages = {
    login: "មានបញ្ហាក្នុងការចូល",
    signup: "មានបញ្ហាក្នុងការចុះឈ្មោះ",
    social: "មានបញ្ហាក្នុងការចូលដោយប្រើគណនីសង្គម។",
  };

  return error instanceof Error ? error.message : contextMessages[context];
};
