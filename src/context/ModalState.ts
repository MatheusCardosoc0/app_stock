import { create } from 'zustand'

interface ModalStateProps {
  isOpen: boolean
  title: string
  action: () => void
  setIsOpen: (value: boolean) => void
  setTitle: (value: string) => void
  setAction: (value: () => void) => void
}

export const useModalState = create<ModalStateProps>((set) => ({
  isOpen: false,
  title: '',
  action: () => {},
  setIsOpen: (value: boolean) => set({ isOpen: value }),
  setTitle: (value: string) => set({ title: value }),
  setAction: (value: () => void) => set({ action: value }),
}))
