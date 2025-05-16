"use client"

import { useState, useEffect } from "react"

type ToastProps = {
  title: string
  description: string
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([])

  const toast = ({ title, description, duration = 5000 }: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description, duration }])

    // Auto dismiss
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, duration)
  }

  useEffect(() => {
    // Clean up any toasts when component unmounts
    return () => {
      setToasts([])
    }
  }, [])

  return { toast, toasts }
}
