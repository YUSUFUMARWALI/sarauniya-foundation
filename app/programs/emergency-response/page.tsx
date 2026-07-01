import ProgramPage from "@/components/programs/ProgramPage";
import { emergencyProgram } from "@/data/emergency";

export default function EmergencyResponsePage() {
  return <ProgramPage program={emergencyProgram} />;
}

