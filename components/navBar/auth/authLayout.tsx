"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import SignUpForm from "./signUpForm";
import SignInForm from "./signInFrom";

export default function AuthLayout() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-red-600 text-white flex justify-center group/modal-btn text-base font-bold">
          <span>ورود | ثبت نام</span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <AnimatePresence>
              {isSignUp ? <SignUpForm /> : <SignInForm />}
            </AnimatePresence>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 mb-5 h-[1px] w-full" />
            <p
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-center cursor-pointer text-blue-600 text-base font-bold"
            >
              {isSignUp ? "ورود به حساب کاربری" : "ثبت نام"}
            </p>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
