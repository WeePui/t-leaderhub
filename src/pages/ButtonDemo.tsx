import React from "react";
import { Button } from "@components/ui/Button";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ButtonDemo = () => {
  // All button variants
  const variants = [
    "primary",
    "secondary",
    "outline-primary",
    "outline-secondary",
    "link",
    "success",
    "danger",
    "info",
    "light",
    "warning",
    "dark",
    "outline-success",
    "outline-danger",
    "outline-dark",
    "outline-info",
    "outline-warning",
  ] as const;

  // All button sizes
  const sizes = ["small", "medium", "large"] as const;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-4">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
      <h1 className="mb-8 text-3xl font-bold">Button Component Demo</h1>

      <div className="space-y-12">
        {/* Regular Buttons */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Regular Buttons</h2>
          <div className="space-y-6">
            {variants.map((variant) => (
              <div key={variant}>
                <h3 className="mb-3 text-xl font-semibold capitalize">
                  {variant}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {sizes.map((size) => (
                    <Button
                      key={`${variant}-${size}`}
                      variant={variant}
                      size={size}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)} Button
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disabled Buttons */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Disabled Buttons</h2>
          <div className="space-y-6">
            {variants.map((variant) => (
              <div key={`${variant}-disabled`}>
                <h3 className="mb-3 text-xl font-semibold capitalize">
                  {variant} (Disabled)
                </h3>
                <div className="flex flex-wrap gap-4">
                  {sizes.map((size) => (
                    <Button
                      key={`${variant}-${size}-disabled`}
                      variant={variant}
                      size={size}
                      disabled
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)} Button
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons with Icons */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Buttons with Icons</h2>
          <div className="space-y-6">
            {variants.slice(0, 5).map((variant) => (
              <div key={`${variant}-with-icon`}>
                <h3 className="mb-3 text-xl font-semibold capitalize">
                  {variant} (With Icons)
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant={variant} leftIcon={<Heart size={16} />}>
                    Left Icon
                  </Button>
                  <Button
                    variant={variant}
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Right Icon
                  </Button>
                  <Button variant={variant} isIconOnly>
                    <Heart size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Loading Buttons */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Loading Buttons</h2>
          <div className="flex flex-wrap gap-4">
            {variants.slice(0, 6).map((variant) => (
              <Button key={`${variant}-loading`} variant={variant} isLoading>
                Loading
              </Button>
            ))}
          </div>
        </section>

        {/* Animated Buttons */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Animated Buttons</h2>
          <div className="flex flex-wrap gap-4">
            {variants.slice(0, 6).map((variant) => (
              <Button key={`${variant}-animated`} variant={variant} isAnimated>
                Hover for Animation
              </Button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonDemo;
