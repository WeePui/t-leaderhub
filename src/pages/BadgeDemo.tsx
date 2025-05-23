import React from "react";
import { Badge } from "@components/ui/Badge";
import { User, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import avatarBadge from "@assets/images/avatar-badge.png";
import countryBadge from "@assets/images/country-badge.png";

const BadgeDemo = () => {
  // All badge variants
  const variants = [
    "gray",
    "primary",
    "error",
    "warning",
    "success",
    "blue-gray",
    "blue-light",
    "blue",
    "indigo",
    "purple",
    "pink",
    "rose",
    "orange",
  ] as const;

  // All badge sizes
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-4">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
      <h1 className="mb-8 text-3xl font-bold">Badge Component Demo</h1>

      <div className="space-y-12">
        {/* Regular Badges */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Regular Badges</h2>
          <div className="space-y-6">
            {variants.map((variant) => (
              <div key={variant}>
                <h3 className="mb-3 text-xl font-semibold capitalize">
                  {variant}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {sizes.map((size) => (
                    <Badge
                      key={`${variant}-${size}`}
                      variant={variant}
                      size={size}
                    >
                      Badge
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>{" "}
        {/* Badges with Dot */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Badges with Dot</h2>
          <div className="flex flex-wrap gap-4">
            {variants.map((variant) => (
              <Badge key={`${variant}-dot`} variant={variant} isDot>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Badge>
            ))}
          </div>
        </section>{" "}
        {/* Badges with Left Icon */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Badges with Left Icon</h2>
          <div className="flex flex-wrap gap-4">
            {variants.slice(0, 5).map((variant) => (
              <Badge
                key={`${variant}-left-icon`}
                variant={variant}
                leftIcon={<User size={12} />}
              >
                User
              </Badge>
            ))}
          </div>
        </section>{" "}
        {/* Badges with Right Icon */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Badges with Right Icon</h2>
          <div className="flex flex-wrap gap-4">
            {variants.slice(0, 5).map((variant) => (
              <Badge
                key={`${variant}-right-icon`}
                variant={variant}
                rightIcon={<ChevronDown size={12} />}
              >
                Options
              </Badge>
            ))}
          </div>
        </section>{" "}
        {/* Icon Only Badges */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Icon Only Badges</h2>
          <div className="flex flex-wrap gap-4">
            {variants.slice(0, 5).map((variant) => (
              <Badge
                key={`${variant}-icon-only`}
                variant={variant}
                isIconOnly
                leftIcon={<Check size={12} />}
              />
            ))}
          </div>
        </section>{" "}
        {/* Country Badges */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Country Badges</h2>
          <div className="flex flex-wrap gap-4">
            {variants.slice(0, 5).map((variant) => (
              <Badge
                key={`${variant}-country`}
                variant={variant}
                isCountry
                countryImage={countryBadge}
              >
                USA
              </Badge>
            ))}
          </div>
        </section>{" "}
        {/* Avatar Badges */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Avatar Badges</h2>
          <div className="flex flex-wrap gap-4">
            {variants.slice(0, 5).map((variant) => (
              <Badge
                key={`${variant}-avatar`}
                variant={variant}
                isAvatar
                avatarImage={avatarBadge}
              >
                John Doe
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BadgeDemo;
