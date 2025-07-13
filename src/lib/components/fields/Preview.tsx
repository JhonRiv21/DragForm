'use client'

import { InputField, SelectField, ButtonField } from './index'

type Props = {
  title: string
}

export const Preview = ({ title }: Props) => {
  switch (title.toLowerCase()) {
    case 'text':
      return <InputField label="Text" placeholder="Enter text" type="text" />
    case 'email':
      return <InputField label="Email" placeholder="you@example.com" type="email" />
    case 'password':
      return <InputField label="Password" placeholder="••••••••" type="password" />
    case 'select':
      return <SelectField label="Select" option={['Option 1', 'Option 2']} />
    case 'button':
      return <ButtonField text="Click me" />
    default:
      return (
        <div className="text-muted-foreground text-sm border border-dashed p-2 rounded">
          Unknown component
        </div>
      )
  }
}
