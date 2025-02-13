"use client";
import Image from "next/image";

export default function Home(): React.ReactElement {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
          alt="Neural Network Background"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            SYNC Prosthetics
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Pioneering Signal-Yielding Neuro Cognitive Prosthetics, we bridge the gap between human intention and mechanical action. Our cutting-edge neural interface technology transforms lives by creating intuitive, responsive prosthetic solutions that seamlessly integrate with the human nervous system.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Innovation</h2>
              <p className="text-muted-foreground">
                Advanced neural mapping and real-time signal processing for unprecedented prosthetic control.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Impact</h2>
              <p className="text-muted-foreground">
                Transforming lives through seamless integration of mind and machine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}