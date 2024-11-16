// src/components/Icons.jsx
// Instagram Icon
export const Instagram = (props) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke="#141718"
        strokeWidth="1.5"
      />
      <circle cx="18" cy="6" r="1" fill="#141718" />
      <circle cx="12" cy="12" r="5" stroke="#141718" strokeWidth="1.5" />
    </svg>
  );
  
  // YouTube Icon
  export const YouTube = (props) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="18"
        rx="4"
        stroke="#141718"
        strokeWidth="1.5"
      />
      <path
        d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  // Hamburger Icon (if needed)
  export const Hamburger = (props) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 8H17M7 12H17M7 16H17"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  
  // Cart Icon
  export const Cart = (props) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  // Close Icon
  export const Close = (props) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
        fill="#6C7275"
      />
    </svg>
  );
  
  // Search Icon
  export const Search = (props) => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 17.5L21 21M20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20C15.7467 20 20 15.7467 20 10.5Z"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  // Dropdown Icon
  export const Dropdown = (props) => (
    <svg
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.27246 1L7.27246 7L13.2725 1"
        stroke="#141718"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  // Wishlist Icon
  export const Wishlist = (props) => (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6924 4.58373C11.3055 4.95505 10.6945 4.95505 10.3076 4.58373L9.6152 3.91927C8.80477 3.14154 7.70994 2.66667 6.5 2.66667C4.01472 2.66667 2 4.68139 2 7.16667C2 9.5493 3.28979 11.5167 5.15176 13.1332C7.01532 14.7511 9.2434 15.8241 10.5746 16.3717C10.853 16.4862 11.147 16.4862 11.4254 16.3717C12.7566 15.8241 14.9847 14.7511 16.8482 13.1332C18.7102 11.5167 20 9.54929 20 7.16667C20 4.68139 17.9853 2.66667 15.5 2.66667C14.2901 2.66667 13.1952 3.14154 12.3848 3.91927L11.6924 4.58373ZM11 2.47624C9.83211 1.35548 8.24649 0.666672 6.5 0.666672C2.91015 0.666672 0 3.57682 0 7.16667C0 13.5349 6.97034 17.0517 9.81379 18.2214C10.5796 18.5364 11.4204 18.5364 12.1862 18.2214C15.0297 17.0517 22 13.5349 22 7.16667C22 3.57682 19.0899 0.666672 15.5 0.666672C13.7535 0.666672 12.1679 1.35548 11 2.47624Z"
        fill="#141718"
      />
    </svg>
  );
  
  // Social Media Icons (Group of Icons)
  // src/components/Icons.jsx
  
  export const Facebook = (props) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke="#141718"
        strokeWidth="1.5"
      />
      <path
        d="M15 7H13C12.4477 7 12 7.44772 12 8V10H15L14.5 12H12V17H10V12H8V10H10V8C10 6.89543 10.8954 6 12 6H15V7Z"
        fill="#141718"
      />
    </svg>
  );
  
  // src/components/Icons.jsx
  
  export const Ticket = (props) => (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.512 9.89042L14.2667 10.5991L14.2667 10.5991L14.512 9.89042ZM14.5121 6.10958L14.7574 6.81831L14.5121 6.10958ZM2.48791 9.89042L2.73328 10.5991H2.73328L2.48791 9.89042ZM2.48791 6.10958L2.24254 6.81831H2.24254L2.48791 6.10958ZM11.0303 6.53033C11.3232 6.23744 11.3232 5.76256 11.0303 5.46967C10.7374 5.17678 10.2625 5.17678 9.96965 5.46967L11.0303 6.53033ZM5.96965 9.46967C5.67676 9.76256 5.67676 10.2374 5.96965 10.5303C6.26254 10.8232 6.73742 10.8232 7.03031 10.5303L5.96965 9.46967ZM4.49998 13.25C3.44143 13.25 2.58331 12.3919 2.58331 11.3333H1.08331C1.08331 13.2203 2.61301 14.75 4.49998 14.75V13.25ZM14.4166 11.3333C14.4166 12.3919 13.5585 13.25 12.5 13.25V14.75C14.387 14.75 15.9166 13.2203 15.9166 11.3333H14.4166ZM12.5 2.75C13.5585 2.75 14.4166 3.60812 14.4166 4.66667H15.9166C15.9166 2.77969 14.387 1.25 12.5 1.25V2.75ZM4.49998 1.25C2.61301 1.25 1.08331 2.77969 1.08331 4.66667H2.58331C2.58331 3.60812 3.44143 2.75 4.49998 2.75V1.25ZM14.7574 9.18169C14.267 9.01191 13.9166 8.54591 13.9166 8H12.4166C12.4166 9.20473 13.1909 10.2267 14.2667 10.5991L14.7574 9.18169ZM13.9166 8C13.9166 7.45409 14.267 6.98809 14.7574 6.81831L14.2667 5.40086C13.1909 5.77332 12.4166 6.79527 12.4166 8H13.9166ZM3.08331 8C3.08331 8.54591 2.73292 9.01191 2.24254 9.18169L2.73328 10.5991C3.80908 10.2267 4.58331 9.20473 4.58331 8H3.08331ZM2.24254 6.81831C2.73292 6.98809 3.08331 7.45409 3.08331 8H4.58331C4.58331 6.79527 3.80908 5.77332 2.73328 5.40086L2.24254 6.81831ZM15.9166 5.33333V4.66667H14.4166V5.33333H15.9166ZM14.4166 10.6667V11.3333H15.9166V10.6667H14.4166ZM1.08331 10.6667V11.3333H2.58331V10.6667H1.08331ZM2.58331 5.33333V4.66667H1.08331V5.33333H2.58331ZM12.5 13.25H4.49998V14.75H12.5V13.25ZM12.5 1.25H4.49998V2.75H12.5V1.25ZM2.24254 9.18169C1.73782 9.35643 1.08331 9.84831 1.08331 10.6667H2.58331C2.58331 10.6809 2.57995 10.6932 2.57715 10.6998C2.57494 10.705 2.57577 10.7005 2.58662 10.6885C2.61142 10.661 2.66274 10.6236 2.73328 10.5991L2.24254 9.18169ZM14.7574 6.81831C15.2621 6.64357 15.9166 6.15169 15.9166 5.33333H14.4166C14.4166 5.31907 14.42 5.30681 14.4228 5.30022C14.425 5.29499 14.4242 5.29953 14.4133 5.31154C14.3885 5.33899 14.3372 5.37643 14.2667 5.40086L14.7574 6.81831ZM2.73328 5.40086C2.66274 5.37643 2.61142 5.33899 2.58662 5.31154C2.57577 5.29953 2.57494 5.29499 2.57715 5.30022C2.57995 5.30681 2.58331 5.31907 2.58331 5.33333H1.08331C1.08331 6.15169 1.73782 6.64357 2.24254 6.81831L2.73328 5.40086ZM14.2667 10.5991C14.3372 10.6236 14.3885 10.661 14.4133 10.6885C14.4242 10.7005 14.425 10.705 14.4228 10.6998C14.42 10.6932 14.4166 10.6809 14.4166 10.6667H15.9166C15.9166 9.84831 15.2621 9.35643 14.7574 9.18169L14.2667 10.5991ZM6.41665 6C6.41665 5.95398 6.45396 5.91667 6.49998 5.91667V7.41667C7.28238 7.41667 7.91665 6.7824 7.91665 6H6.41665ZM6.49998 5.91667C6.546 5.91667 6.58331 5.95398 6.58331 6H5.08331C5.08331 6.7824 5.71758 7.41667 6.49998 7.41667V5.91667ZM6.58331 6C6.58331 6.04602 6.546 6.08333 6.49998 6.08333V4.58333C5.71758 4.58333 5.08331 5.2176 5.08331 6H6.58331ZM6.49998 6.08333C6.45396 6.08333 6.41665 6.04602 6.41665 6H7.91665C7.91665 5.2176 7.28238 4.58333 6.49998 4.58333V6.08333ZM10.4166 10C10.4166 9.95398 10.454 9.91667 10.5 9.91667V11.4167C11.2824 11.4167 11.9166 10.7824 11.9166 10H10.4166ZM10.5 9.91667C10.546 9.91667 10.5833 9.95398 10.5833 10H9.08331C9.08331 10.7824 9.71758 11.4167 10.5 11.4167V9.91667ZM10.5833 10C10.5833 10.046 10.546 10.0833 10.5 10.0833V8.58333C9.71758 8.58333 9.08331 9.2176 9.08331 10H10.5833ZM10.5 10.0833C10.454 10.0833 10.4166 10.046 10.4166 10H11.9166C11.9166 9.2176 11.2824 8.58333 10.5 8.58333V10.0833ZM9.96965 5.46967L5.96965 9.46967L7.03031 10.5303L11.0303 6.53033L9.96965 5.46967Z"
        fill="#141718"
      />
    </svg>
  );