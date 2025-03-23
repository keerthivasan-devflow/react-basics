**Refer the following URL to configure typescript + parcel library**
https://femincan.dev/how-to-setup-react-app-with-parcel-and-typescript

**Basic Datatypes**
- string
- number
- boolean
- null
- undefined

**Complex Datatypes**
- array - Example: string[] | number[]
- array of objects - Example: {firstname: string, lastname: string}[]
- objects - Example: {firstname: string, lastname: string}

**Optional Props & String Literal Props** | **Discriminated Union Feature**
type UserProfile{
firstname?: string
lastname?: string
age?: number
gender: "male" | "female" | "others"
}

**Children Props**
- children(string) - children: string
- children(HTML Element) - children: React.ReactNode
- children(React Component) - children: React.ReactNode

**Style Props** - React.CSSProperties
**Component As a Prop**- React.ComponentType
