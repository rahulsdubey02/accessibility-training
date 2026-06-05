const WCAG_DATA = {
  version: "2.2",
  principles: [
    {
      id: 1,
      slug: "perceivable",
      name: "Perceivable",
      description: "Information and user interface components must be presentable to users in ways they can perceive.",
      guidelines: [
        {
          id: "1.1",
          name: "Text Alternatives",
          description: "Provide text alternatives for any non-text content so that it can be changed into other forms people need.",
          criteria: [
            {
              id: "1.1.1",
              name: "Non-text Content",
              level: "A",
              addedIn: "2.0",
              description: "All non-text content has a text alternative that serves the equivalent purpose, with exceptions for controls, time-based media, tests, sensory experiences, CAPTCHA, and decoration."
            }
          ]
        },
        {
          id: "1.2",
          name: "Time-based Media",
          description: "Provide alternatives for time-based media.",
          criteria: [
            {
              id: "1.2.1",
              name: "Audio-only and Video-only (Prerecorded)",
              level: "A",
              addedIn: "2.0",
              description: "Prerecorded audio-only and video-only content have alternatives that present equivalent information."
            },
            {
              id: "1.2.2",
              name: "Captions (Prerecorded)",
              level: "A",
              addedIn: "2.0",
              description: "Captions are provided for all prerecorded audio content in synchronized media, except when the media is an alternative for text."
            },
            {
              id: "1.2.3",
              name: "Audio Description or Media Alternative (Prerecorded)",
              level: "A",
              addedIn: "2.0",
              description: "An alternative for time-based media or audio description of prerecorded video content is provided for synchronized media."
            },
            {
              id: "1.2.4",
              name: "Captions (Live)",
              level: "AA",
              addedIn: "2.0",
              description: "Captions are provided for all live audio content in synchronized media."
            },
            {
              id: "1.2.5",
              name: "Audio Description (Prerecorded)",
              level: "AA",
              addedIn: "2.0",
              description: "Audio description is provided for all prerecorded video content in synchronized media."
            },
            {
              id: "1.2.6",
              name: "Sign Language (Prerecorded)",
              level: "AAA",
              addedIn: "2.0",
              description: "Sign language interpretation is provided for all prerecorded audio content in synchronized media."
            },
            {
              id: "1.2.7",
              name: "Extended Audio Description (Prerecorded)",
              level: "AAA",
              addedIn: "2.0",
              description: "Extended audio description is provided for all prerecorded video content where foreground audio is insufficient to convey the video content."
            },
            {
              id: "1.2.8",
              name: "Media Alternative (Prerecorded)",
              level: "AAA",
              addedIn: "2.0",
              description: "A full text alternative is provided for all prerecorded synchronized media and for all prerecorded video-only media."
            },
            {
              id: "1.2.9",
              name: "Audio-only (Live)",
              level: "AAA",
              addedIn: "2.0",
              description: "An alternative for time-based media presenting equivalent information is provided for live audio-only content."
            }
          ]
        },
        {
          id: "1.3",
          name: "Adaptable",
          description: "Create content that can be presented in different ways without losing information or structure.",
          criteria: [
            {
              id: "1.3.1",
              name: "Info and Relationships",
              level: "A",
              addedIn: "2.0",
              description: "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text."
            },
            {
              id: "1.3.2",
              name: "Meaningful Sequence",
              level: "A",
              addedIn: "2.0",
              description: "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined."
            },
            {
              id: "1.3.3",
              name: "Sensory Characteristics",
              level: "A",
              addedIn: "2.0",
              description: "Instructions do not rely solely on sensory characteristics such as shape, color, size, visual location, orientation, or sound."
            },
            {
              id: "1.3.4",
              name: "Orientation",
              level: "AA",
              addedIn: "2.1",
              description: "Content does not restrict its view and operation to a single display orientation unless a specific orientation is essential."
            },
            {
              id: "1.3.5",
              name: "Identify Input Purpose",
              level: "AA",
              addedIn: "2.1",
              description: "The purpose of each input field collecting information about the user can be programmatically determined."
            },
            {
              id: "1.3.6",
              name: "Identify Purpose",
              level: "AAA",
              addedIn: "2.1",
              description: "The purpose of UI components, icons, and regions can be programmatically determined."
            }
          ]
        },
        {
          id: "1.4",
          name: "Distinguishable",
          description: "Make it easier for users to see and hear content including separating foreground from background.",
          criteria: [
            {
              id: "1.4.1",
              name: "Use of Color",
              level: "A",
              addedIn: "2.0",
              description: "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element."
            },
            {
              id: "1.4.2",
              name: "Audio Control",
              level: "A",
              addedIn: "2.0",
              description: "If any audio plays automatically for more than 3 seconds, a mechanism is available to pause, stop, or control the volume independently."
            },
            {
              id: "1.4.3",
              name: "Contrast (Minimum)",
              level: "AA",
              addedIn: "2.0",
              description: "Text and images of text have a contrast ratio of at least 4.5:1, except for large text (3:1), incidental text, and logotypes."
            },
            {
              id: "1.4.4",
              name: "Resize text",
              level: "AA",
              addedIn: "2.0",
              description: "Text can be resized without assistive technology up to 200 percent without loss of content or functionality."
            },
            {
              id: "1.4.5",
              name: "Images of Text",
              level: "AA",
              addedIn: "2.0",
              description: "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information conveyed."
            },
            {
              id: "1.4.6",
              name: "Contrast (Enhanced)",
              level: "AAA",
              addedIn: "2.0",
              description: "Text and images of text have a contrast ratio of at least 7:1, except for large text (4.5:1), incidental text, and logotypes."
            },
            {
              id: "1.4.7",
              name: "Low or No Background Audio",
              level: "AAA",
              addedIn: "2.0",
              description: "Prerecorded audio that is primarily speech has no background sounds, or background sounds are at least 20 dB lower than the foreground speech."
            },
            {
              id: "1.4.8",
              name: "Visual Presentation",
              level: "AAA",
              addedIn: "2.0",
              description: "Users can customize the visual presentation of blocks of text including foreground/background colors, width, line spacing, and text alignment."
            },
            {
              id: "1.4.9",
              name: "Images of Text (No Exception)",
              level: "AAA",
              addedIn: "2.0",
              description: "Images of text are only used for pure decoration or where a specific visual presentation is essential."
            },
            {
              id: "1.4.10",
              name: "Reflow",
              level: "AA",
              addedIn: "2.1",
              description: "Content can be presented without loss of information or functionality and without requiring scrolling in two dimensions at a viewport width of 320 CSS pixels."
            },
            {
              id: "1.4.11",
              name: "Non-text Contrast",
              level: "AA",
              addedIn: "2.1",
              description: "UI components and graphical objects have a contrast ratio of at least 3:1 against adjacent color(s)."
            },
            {
              id: "1.4.12",
              name: "Text Spacing",
              level: "AA",
              addedIn: "2.1",
              description: "No loss of content or functionality occurs when overriding text spacing properties: line height, letter spacing, word spacing, or spacing after paragraphs."
            },
            {
              id: "1.4.13",
              name: "Content on Hover or Focus",
              level: "AA",
              addedIn: "2.1",
              description: "Additional content that appears on pointer hover or keyboard focus is dismissible, hoverable, and persistent."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      slug: "operable",
      name: "Operable",
      description: "User interface components and navigation must be operable.",
      guidelines: [
        {
          id: "2.1",
          name: "Keyboard Accessible",
          description: "Make all functionality available from a keyboard.",
          criteria: [
            {
              id: "2.1.1",
              name: "Keyboard",
              level: "A",
              addedIn: "2.0",
              description: "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes."
            },
            {
              id: "2.1.2",
              name: "No Keyboard Trap",
              level: "A",
              addedIn: "2.0",
              description: "If keyboard focus can be moved to a component using the keyboard, focus can also be moved away, or the user is informed of the method to do so."
            },
            {
              id: "2.1.3",
              name: "Keyboard (No Exception)",
              level: "AAA",
              addedIn: "2.0",
              description: "All functionality of the content is operable through a keyboard interface without exception."
            },
            {
              id: "2.1.4",
              name: "Character Key Shortcuts",
              level: "A",
              addedIn: "2.1",
              description: "Keyboard shortcuts using a single character can be turned off, remapped to a non-character key, or are only active when the component has focus."
            }
          ]
        },
        {
          id: "2.2",
          name: "Enough Time",
          description: "Provide users enough time to read and use content.",
          criteria: [
            {
              id: "2.2.1",
              name: "Timing Adjustable",
              level: "A",
              addedIn: "2.0",
              description: "For each time limit set by the content, the user can turn off, adjust, or extend the time limit, with exceptions."
            },
            {
              id: "2.2.2",
              name: "Pause, Stop, Hide",
              level: "A",
              addedIn: "2.0",
              description: "For moving, blinking, scrolling, or auto-updating information, a mechanism is available to pause, stop, or hide it."
            },
            {
              id: "2.2.3",
              name: "No Timing",
              level: "AAA",
              addedIn: "2.0",
              description: "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events."
            },
            {
              id: "2.2.4",
              name: "Interruptions",
              level: "AAA",
              addedIn: "2.0",
              description: "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency."
            },
            {
              id: "2.2.5",
              name: "Re-authenticating",
              level: "AAA",
              addedIn: "2.0",
              description: "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating."
            },
            {
              id: "2.2.6",
              name: "Timeouts",
              level: "AAA",
              addedIn: "2.1",
              description: "Users are warned of any timeout that could cause data loss, unless the data is preserved for more than 20 hours of user inactivity."
            }
          ]
        },
        {
          id: "2.3",
          name: "Seizures and Physical Reactions",
          description: "Do not design content in a way that is known to cause seizures or physical reactions.",
          criteria: [
            {
              id: "2.3.1",
              name: "Three Flashes or Below Threshold",
              level: "A",
              addedIn: "2.0",
              description: "Web pages do not contain anything that flashes more than three times per second, or the flash is below the general and red flash thresholds."
            },
            {
              id: "2.3.2",
              name: "Three Flashes",
              level: "AAA",
              addedIn: "2.0",
              description: "Web pages do not contain anything that flashes more than three times in any one second period."
            },
            {
              id: "2.3.3",
              name: "Animation from Interactions",
              level: "AAA",
              addedIn: "2.1",
              description: "Motion animation triggered by interaction can be disabled unless the animation is essential to the functionality or information being conveyed."
            }
          ]
        },
        {
          id: "2.4",
          name: "Navigable",
          description: "Provide ways to help users navigate, find content, and determine where they are.",
          criteria: [
            {
              id: "2.4.1",
              name: "Bypass Blocks",
              level: "A",
              addedIn: "2.0",
              description: "A mechanism is available to bypass blocks of content that are repeated on multiple web pages."
            },
            {
              id: "2.4.2",
              name: "Page Titled",
              level: "A",
              addedIn: "2.0",
              description: "Web pages have titles that describe topic or purpose."
            },
            {
              id: "2.4.3",
              name: "Focus Order",
              level: "A",
              addedIn: "2.0",
              description: "If a web page can be navigated sequentially and the navigation sequence affects meaning or operation, focusable components receive focus in an order that preserves meaning and operability."
            },
            {
              id: "2.4.4",
              name: "Link Purpose (In Context)",
              level: "A",
              addedIn: "2.0",
              description: "The purpose of each link can be determined from the link text alone, or from the link text together with its programmatically determined context."
            },
            {
              id: "2.4.5",
              name: "Multiple Ways",
              level: "AA",
              addedIn: "2.0",
              description: "More than one way is available to locate a web page within a set of pages, except where the page is a step in a process."
            },
            {
              id: "2.4.6",
              name: "Headings and Labels",
              level: "AA",
              addedIn: "2.0",
              description: "Headings and labels describe topic or purpose."
            },
            {
              id: "2.4.7",
              name: "Focus Visible",
              level: "AA",
              addedIn: "2.0",
              description: "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible."
            },
            {
              id: "2.4.8",
              name: "Location",
              level: "AAA",
              addedIn: "2.0",
              description: "Information about the user's location within a set of web pages is available."
            },
            {
              id: "2.4.9",
              name: "Link Purpose (Link Only)",
              level: "AAA",
              addedIn: "2.0",
              description: "A mechanism is available to allow the purpose of each link to be identified from link text alone."
            },
            {
              id: "2.4.10",
              name: "Section Headings",
              level: "AAA",
              addedIn: "2.0",
              description: "Section headings are used to organize the content."
            },
            {
              id: "2.4.11",
              name: "Focus Not Obscured (Minimum)",
              level: "AA",
              addedIn: "2.2",
              description: "When a UI component receives keyboard focus, the component is not entirely hidden due to author-created content such as a sticky header."
            },
            {
              id: "2.4.12",
              name: "Focus Not Obscured (Enhanced)",
              level: "AAA",
              addedIn: "2.2",
              description: "When a UI component receives keyboard focus, no part of the component is hidden by author-created content."
            },
            {
              id: "2.4.13",
              name: "Focus Appearance",
              level: "AAA",
              addedIn: "2.2",
              description: "The keyboard focus indicator has a minimum size equal to the perimeter of the unfocused component and meets minimum contrast requirements."
            }
          ]
        },
        {
          id: "2.5",
          name: "Input Modalities",
          description: "Make it easier for users to operate functionality through various inputs beyond keyboard.",
          criteria: [
            {
              id: "2.5.1",
              name: "Pointer Gestures",
              level: "A",
              addedIn: "2.1",
              description: "All functionality that uses multipoint or path-based gestures can be operated with a single pointer without a path-based gesture, unless such a gesture is essential."
            },
            {
              id: "2.5.2",
              name: "Pointer Cancellation",
              level: "A",
              addedIn: "2.1",
              description: "For functionality triggered by a single pointer, at least one of: no down-event, ability to abort or undo, up reversal, or essential is true."
            },
            {
              id: "2.5.3",
              name: "Label in Name",
              level: "A",
              addedIn: "2.1",
              description: "For UI components with visible text labels, the accessible name contains the text that is visually presented."
            },
            {
              id: "2.5.4",
              name: "Motion Actuation",
              level: "A",
              addedIn: "2.1",
              description: "Functionality operated by device or user motion can also be operated by UI components, and the motion response can be disabled to prevent accidental actuation."
            },
            {
              id: "2.5.5",
              name: "Target Size (Enhanced)",
              level: "AAA",
              addedIn: "2.1",
              description: "The size of the target for pointer inputs is at least 44 by 44 CSS pixels."
            },
            {
              id: "2.5.6",
              name: "Concurrent Input Mechanisms",
              level: "AAA",
              addedIn: "2.1",
              description: "Web content does not restrict the use of input modalities available on a platform except where the restriction is essential."
            },
            {
              id: "2.5.7",
              name: "Dragging Movements",
              level: "AA",
              addedIn: "2.2",
              description: "All functionality that uses a dragging movement can be achieved by a single pointer without dragging, unless dragging is essential."
            },
            {
              id: "2.5.8",
              name: "Target Size (Minimum)",
              level: "AA",
              addedIn: "2.2",
              description: "The size of the target for pointer inputs is at least 24 by 24 CSS pixels, with some exceptions for inline targets, native controls, and where target size is determined by the user agent."
            }
          ]
        }
      ]
    },
    {
      id: 3,
      slug: "understandable",
      name: "Understandable",
      description: "Information and the operation of the user interface must be understandable.",
      guidelines: [
        {
          id: "3.1",
          name: "Readable",
          description: "Make text content readable and understandable.",
          criteria: [
            {
              id: "3.1.1",
              name: "Language of Page",
              level: "A",
              addedIn: "2.0",
              description: "The default human language of each web page can be programmatically determined."
            },
            {
              id: "3.1.2",
              name: "Language of Parts",
              level: "AA",
              addedIn: "2.0",
              description: "The human language of each passage or phrase in the content can be programmatically determined, with some exceptions."
            },
            {
              id: "3.1.3",
              name: "Unusual Words",
              level: "AAA",
              addedIn: "2.0",
              description: "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way."
            },
            {
              id: "3.1.4",
              name: "Abbreviations",
              level: "AAA",
              addedIn: "2.0",
              description: "A mechanism for identifying the expanded form or meaning of abbreviations is available."
            },
            {
              id: "3.1.5",
              name: "Reading Level",
              level: "AAA",
              addedIn: "2.0",
              description: "When text requires reading ability more advanced than the lower secondary education level, supplemental content or a simpler version is available."
            },
            {
              id: "3.1.6",
              name: "Pronunciation",
              level: "AAA",
              addedIn: "2.0",
              description: "A mechanism is available for identifying specific pronunciation of words where the meaning of the word is ambiguous without knowing the pronunciation."
            }
          ]
        },
        {
          id: "3.2",
          name: "Predictable",
          description: "Make web pages appear and operate in predictable ways.",
          criteria: [
            {
              id: "3.2.1",
              name: "On Focus",
              level: "A",
              addedIn: "2.0",
              description: "Any UI component that receives focus does not initiate a change of context."
            },
            {
              id: "3.2.2",
              name: "On Input",
              level: "A",
              addedIn: "2.0",
              description: "Changing the setting of any UI component does not automatically cause a change of context unless the user has been advised of the behavior."
            },
            {
              id: "3.2.3",
              name: "Consistent Navigation",
              level: "AA",
              addedIn: "2.0",
              description: "Navigational mechanisms that are repeated on multiple pages within a set of web pages occur in the same relative order each time they are repeated."
            },
            {
              id: "3.2.4",
              name: "Consistent Identification",
              level: "AA",
              addedIn: "2.0",
              description: "Components that have the same functionality within a set of web pages are identified consistently."
            },
            {
              id: "3.2.5",
              name: "Change on Request",
              level: "AAA",
              addedIn: "2.0",
              description: "Changes of context are initiated only by user request, or a mechanism is available to turn off such changes."
            },
            {
              id: "3.2.6",
              name: "Consistent Help",
              level: "A",
              addedIn: "2.2",
              description: "If a web page provides any of the following help mechanisms, those mechanisms are provided in a consistent location across all pages of the web site."
            }
          ]
        },
        {
          id: "3.3",
          name: "Input Assistance",
          description: "Help users avoid and correct mistakes.",
          criteria: [
            {
              id: "3.3.1",
              name: "Error Identification",
              level: "A",
              addedIn: "2.0",
              description: "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text."
            },
            {
              id: "3.3.2",
              name: "Labels or Instructions",
              level: "A",
              addedIn: "2.0",
              description: "Labels or instructions are provided when content requires user input."
            },
            {
              id: "3.3.3",
              name: "Error Suggestion",
              level: "AA",
              addedIn: "2.0",
              description: "If an input error is automatically detected and suggestions for correction are known, the suggestions are provided to the user, unless doing so would jeopardize the security or purpose of the content."
            },
            {
              id: "3.3.4",
              name: "Error Prevention (Legal, Financial, Data)",
              level: "AA",
              addedIn: "2.0",
              description: "For web pages that cause legal commitments, financial transactions, or test responses, submissions are reversible, verified for errors, or confirmed by the user."
            },
            {
              id: "3.3.5",
              name: "Help",
              level: "AAA",
              addedIn: "2.0",
              description: "Context-sensitive help is available."
            },
            {
              id: "3.3.6",
              name: "Error Prevention (All)",
              level: "AAA",
              addedIn: "2.0",
              description: "For web pages that require the user to submit information, submissions are reversible, verified for errors, or confirmed by the user."
            },
            {
              id: "3.3.7",
              name: "Redundant Entry",
              level: "A",
              addedIn: "2.2",
              description: "Information previously entered by or provided to the user that is required to be entered again in the same process is auto-populated or available for the user to select."
            },
            {
              id: "3.3.8",
              name: "Accessible Authentication (Minimum)",
              level: "AA",
              addedIn: "2.2",
              description: "A cognitive function test is not required for any step in an authentication process unless an alternative authentication method is available, or a mechanism to assist is provided."
            },
            {
              id: "3.3.9",
              name: "Accessible Authentication (Enhanced)",
              level: "AAA",
              addedIn: "2.2",
              description: "A cognitive function test is not required for any step in an authentication process."
            }
          ]
        }
      ]
    },
    {
      id: 4,
      slug: "robust",
      name: "Robust",
      description: "Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.",
      guidelines: [
        {
          id: "4.1",
          name: "Compatible",
          description: "Maximize compatibility with current and future user agents, including assistive technologies.",
          criteria: [
            {
              id: "4.1.1",
              name: "Parsing",
              level: "A",
              addedIn: "2.0",
              deprecated: true,
              deprecatedIn: "2.2",
              description: "Deprecated in WCAG 2.2. Previously required valid markup; now considered always satisfied in modern HTML5 browsers and treated as obsolete."
            },
            {
              id: "4.1.2",
              name: "Name, Role, Value",
              level: "A",
              addedIn: "2.0",
              description: "For all UI components, the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set."
            },
            {
              id: "4.1.3",
              name: "Status Messages",
              level: "AA",
              addedIn: "2.1",
              description: "Status messages can be programmatically determined through role or properties so that they can be announced by assistive technologies without receiving focus."
            }
          ]
        }
      ]
    }
  ]
};
