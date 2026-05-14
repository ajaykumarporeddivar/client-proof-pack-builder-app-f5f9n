'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // SSR-safe: Initialize state with initialValue, then read from localStorage in useEffect
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // Use a ref to store the key to avoid closure issues in useEffect cleanup
  const keyRef = useRef(key)

  useEffect(() => {
    keyRef.current = key // Update ref if key changes
    try {
      const item = window.localStorage.getItem(keyRef.current)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error)
    }
  }, [key])

  const setValue = useCallback((value: T) => {
    try {
      setStoredValue(value)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(keyRef.current, JSON.stringify(value))
      }
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }, [])

  return [storedValue, setValue]
}

export function useFilter<T extends Record<string, unknown>>(
  items: T[],
  fields: (keyof T)[]
): {
  filtered: T[]
  search: string
  setSearch: (s: string) => void
  status: string
  setStatus: (s: string) => void
} {
  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const filtered = items.filter(item => {
    const matchesSearch = search.trim() === '' || fields.some(field =>
      String(item[field]).toLowerCase().includes(search.toLowerCase())
    )

    const matchesStatus = status.trim() === '' || (item.status && String(item.status).toLowerCase() === status.toLowerCase())

    return matchesSearch && matchesStatus
  })

  return { filtered, search, setSearch, status, setStatus }
}

export function useModal<T = unknown>(): {
  isOpen: boolean
  open: (item?: T) => void
  close: () => void
  activeItem: T | null
} {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<T | null>(null)

  const open = useCallback((item?: T) => {
    setActiveItem(item || null)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setActiveItem(null)
  }, [])

  return { isOpen, open, close, activeItem }
}

export function useDemoToast(): {
  message: string
  type: 'success' | 'error' | 'info'
  visible: boolean
  show: (msg: string, type?: 'success' | 'error' | 'info') => void
} {
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<'success' | 'error' | 'info'>('info')
  const [visible, setVisible] = useState<boolean>(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const show = useCallback((msg: string, toastType: 'success' | 'error' | 'info' = 'info') => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setMessage(msg)
    setType(toastType)
    setVisible(true)
    timerRef.current = setTimeout(() => {
      setVisible(false)
      setMessage('')
    }, 2500)
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return { message, type, visible, show }
}