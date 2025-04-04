import React, { createContext, useContext, useState, useCallback } from "react";

const SignUpModalContext = createContext();

export const SignUpModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SignUpModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </SignUpModalContext.Provider>
  );
};

export const useSignUpModal = () => useContext(SignUpModalContext);
