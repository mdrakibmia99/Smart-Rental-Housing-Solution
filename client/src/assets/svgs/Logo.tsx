export default function Logo() {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Circle Background */}
        <circle cx="50" cy="50" r="48" stroke="#00A8E8" strokeWidth="4" fill="none" />
        
        {/* Custom Letter Design */}
        <text x="50%" y="55%" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#212326" fontFamily="Arial">
          RK
        </text>
      </svg>
    );
  }
  