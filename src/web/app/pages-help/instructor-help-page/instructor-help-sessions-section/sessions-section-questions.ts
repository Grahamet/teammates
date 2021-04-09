/**
 * Unique identifiers for each question in the sessions section of instructor help page
 */
export enum SessionsSectionQuestions {
  /**
   * Tips for conducting team peer evaluation sessions
   */
  TIPS_FOR_CONDUCTION_PEER_EVAL = 'tips-for-conducting-peer-eval',

  /**
   * How do I add questions to a session?
   */
  SESSION_QUESTIONS = 'session-questions',

  /**
   * How do I preview a session?
   */
  SESSION_PREVIEW = 'session-preview',

  /**
   * What should I do if a student says he/she cannot submit an evaluation due to a technical glitch?
   */
  SESSION_CANNOT_SUBMIT = 'session-cannot-submit',

  /**
   * How do I view the results of my session?
   */
  SESSION_VIEW_RESULTS = 'session-view-results',

  /**
   * How do I create a comment on a response?
   */
  SESSION_ADD_COMMENTS = 'session-add-comments',

  /**
   * How do I view sessions I have deleted?
   */
  VIEW_DELETED_SESSION = 'view-deleted-session',

  /**
   * How do I restore a deleted session?
   */
  RESTORE_SESSION = 'restore-session',

  /**
   * How do I create and schedule a new feedback session?
   */
  SESSION_NEW_FEEDBACK = 'session-new-feedback',

  /**
   * How do I view all the responses a student has given and received?
   */
  VIEW_ALL_RESPONSES = 'view-all-responses',

  /**
   * How do I edit or delete a comment on a response?
   */
  EDIT_DEL_COMMENT = 'edit-del-comment',

  /**
   * How do I permanently delete a session?
   */
  PERMANENT_DEL_SESSION = 'permenant-del-session',

  /**
   * How do I restore/delete all sessions from Recycle Bin?
   */
  RESTORE_DEL_ALL = 'restore-del-all',

  /**
   * When do students see responses?
   */
  STUDENTS_SEE_RESPONSE = 'students-see_response',

  /**
   * Can I change visibility settings after the session has started?
   */
  VISIBILITY_SETTINGS = 'visibility-settings',

  /**
   * Can students edit responses after they have submitted them?
   */
  EDIT_AFTER_SUBMIT = 'edit-after-submitted',

  /**
   * Can I set a question as compulsory?
   */
  COMPULSORY = 'compulsory',

  /**
   * Can I extend the deadline?
   */
  EXTEND_DEADLINE = 'extend-deadline',

  /**
   * Can I extend the deadline for a specific student?
   */
  SPECIFIC_STUDENT_EXTENSION = 'specific-student-extension',

  /**
   * Can I see when a student tried to access the submission page?
   */
  VIEW_SUBMISSION_ACCESS_TIME = 'view-submission-access-time',

  /**
   * How can I resend links to view the session results?
   */
  RESEND_SESSION_RESULTS = 'resend-session-results',

  /**
   * A student says he/she did not recieve the link to submit responses. What do i do?
   */
  NO_LINK_TO_RESPOND = 'no-link-to-respond',
}
