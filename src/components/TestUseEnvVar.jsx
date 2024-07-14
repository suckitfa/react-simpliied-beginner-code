export default function TestUseEnvVar() {
    return <div>
        {import.meta.env.VITE_URL}
    </div>
}