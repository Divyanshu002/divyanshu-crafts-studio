import * as React from "react"
import { Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string
  onValueChange?: (value: string) => void
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value, onValueChange, onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    
    const formatPhoneNumber = (value: string) => {
      // Remove all non-digits
      const cleaned = value.replace(/\D/g, '')
      
      // Format as XXX-XXX-XXXX
      if (cleaned.length >= 6) {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
      } else if (cleaned.length >= 3) {
        return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`
      }
      return cleaned
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhoneNumber(e.target.value)
      
      if (onValueChange) {
        onValueChange(formatted)
      }
      
      if (onChange) {
        const syntheticEvent = {
          ...e,
          target: { ...e.target, value: formatted }
        }
        onChange(syntheticEvent)
      }
    }

    return (
      <div className={cn(
        "relative group",
        className
      )}>
        <div className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300",
          isFocused ? "text-primary scale-110" : "text-muted-foreground"
        )}>
          <Phone className="h-4 w-4" />
        </div>
        <Input
          ref={ref}
          type="tel"
          placeholder="123-456-7890"
          value={value}
          onChange={handleChange}
          onFocus={(e) => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
          className={cn(
            "pl-10 transition-all duration-300",
            isFocused && "ring-2 ring-primary ring-offset-2 border-primary animate-glow"
          )}
          maxLength={12} // XXX-XXX-XXXX format
          {...props}
        />
        <div className={cn(
          "absolute inset-0 rounded-md pointer-events-none transition-all duration-300",
          isFocused ? "shadow-lg shadow-primary/25" : "shadow-none"
        )} />
      </div>
    )
  }
)

PhoneInput.displayName = "PhoneInput"

export { PhoneInput }