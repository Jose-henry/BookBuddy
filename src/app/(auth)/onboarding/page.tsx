import { ProfileForm } from "@/components/forms/ProfileForm";
import { SignedIn } from "@clerk/nextjs";

export default function Onboarding() {
    return (
        <SignedIn>
            <div>Signed in</div>
        </SignedIn>
    );
}