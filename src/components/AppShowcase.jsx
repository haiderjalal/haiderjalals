// app/components/AppShowcase.js
import AppShowcaseClient from "./AppShowcaseClient"; // Import the client-side component

export default function AppShowcase() {
  return (
    <div className="relative h-screen w-full">
      {/* Render the client-side AppShowcase component */}
      <AppShowcaseClient />
    </div>
  );
}
