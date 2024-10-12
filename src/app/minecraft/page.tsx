import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex justify-center items-center">
            <Image
                src="/Minecraft/minecraft.webp"
                alt="Minecraft Poster"
                width={750}
                height={0}
                className="h-auto"
            />
        </div>
    )
}
