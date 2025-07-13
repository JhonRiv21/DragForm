import { Input } from "@/components/ui/input"

type Props = {
  label: string
  type?: "text" | "email" | "password"
  placeholder?: string
}

export const InputField = ({ label = 'Name', type = "text", placeholder = "Insert" }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-muted-foreground">{label}</label>}
      <Input
        type={type}
        placeholder={placeholder}
        className="px-3 py-2 border rounded bg-background text-foreground border-border"
      />
    </div>
  )
}