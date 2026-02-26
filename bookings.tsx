import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export default function Booking() {

  const handleBooking = () => {
    window.open("https://cleoronce.simplybook.me", "_blank");
