"use client";

import { title } from "@/components/primitives";
import { Button } from "@heroui/button"
import { Image } from"@heroui/image"
import { addToast } from "@heroui/toast";
const reason1Toast = () => {
  addToast({
    title: "Hey!",
    description:
      "This button does nothing. But you can make it do something!",
    color: "danger",
  });
};
const reason2Toast = () => {
  addToast({
    title: "Hey!",
    description:
      "This button does nothing. But you can make it do something!",
    color: "danger",
  });
};
const reason3Toast = () => {
  addToast({
    title: "Hey!",
    description:
      "This button does nothing. But you can make it do something!",
    color: "danger",
  });
};
const reason4Toast = () => {
  addToast({
    title: "Hey!",
    description:
      "This button does nothing. But you can make it do something!",
    color: "danger",
  });
};

export default function A5Page() {
  return (
    <div>
      <h1 className={title()}>A5: Defend the fictional villan</h1>
      <p>
        Scar from the lion king is my chosen villian
      </p>
      <Image
        alt="Scar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYt2efyDPWwP44k1JV-y5OYuvtEII1E_MhXA&sLinks to an external site."
        width={180}
      />
      <Button onClick={() => {reason1Toast()}}>Scar told Mufasa that he liked Sarabi but then practically the following day, Sarabi and Mufasa got together.</Button>
      <Image
       alt="Scar"
       src=" https://miro.medium.com/v2/resize:fit:1400/1*MRgIozj1WLBlrssLlE1ZNw.jpeg"
       width={110}
      />
      <Button onClick={() => {reason2Toast()}}>Scar was in line to be king originally since Mufasa is adopted. Mufasa only became king since the rest of the animals randomly voted for him.</Button>
      <Image
       alt="Scar"
       src="https://www.theringer.com/_next/image?url=https%3A%2F%2Fwp.theringer.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fbaumann_scar_govt_policy_disney_ringer.jpg&w=3840&q=75&dpl=7ef4f31b99cb15dabdaf085baeec64d4b498e074"
       width={170}
      />
      <Button onClick={() => {reason3Toast()}}>Scar's birth name is Taka, which litterally translates to trash, so his parents clearly never liked him.</Button>
      <Image
       alt="Scar"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgeEq1ftoAuPTc0oU4LjH0EgR5YPqJtaw8Q&sLinks to an external site."
       width={125}
      />
      <Button onClick={() => {reason3Toast()}}>Scar gave the Hyenas acces, who were a shunned grouped in the kingdom.</Button>
      <Image
       alt="Scar"
       src="https://www.looper.com/img/gallery/how-did-scar-get-his-scar-in-the-lion-king/intro-1747171707.jpg"
       width={180}
      />
    </div>
  );
}