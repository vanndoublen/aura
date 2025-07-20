"use client";

import { useCurrentTheme } from "@/hooks/use-current-theme";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { SettingsIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

interface Props {
    showName?: boolean;
}

const ClerkThemeToggle = () => {
    const { setTheme, theme } = useTheme();

    return (
        <div className="flex items-center justify-between p-4">
            <span className="text-sm font-medium">Theme</span>
            <Button
                // size="icon"
                variant="ghost"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 px-3 py-2 rounded-md border transition-colors"
            >
                {theme === "dark" ? (
                    <>
                        <Sun size={16} />
                        <span className="text-sm">Light</span>
                    </>
                ) : (
                    <>
                        <Moon size={16} />
                        <span className="text-sm">Dark</span>
                    </>
                )}
            </Button>
        </div>
    );
};

export const UserControl = ({ showName }: Props) => {
    const currentTheme = useCurrentTheme();
    const { theme, setTheme } = useTheme(); 

    return (
        <UserButton
            showName={showName}
            appearance={{
                elements: {
                    userButtonBox: "rounded-md!",
                    userButtonAvatarBox: "rounded-md! size-8!",
                    userButtonTrigger: "rounded-md!",
                },
                baseTheme: currentTheme === "dark" ? dark : undefined,
            }}
        >
            <UserButton.MenuItems>
                <UserButton.Link
                    label="dashboard"
                    href="/dashboard"
                    labelIcon={<div></div>}
                />
                <UserButton.Action
                    label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    labelIcon={theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
            </UserButton.MenuItems>

            <UserButton.UserProfilePage
                label="Settings"
                labelIcon={<SettingsIcon size={16} />}
                url="settings"
            >
                <ClerkThemeToggle />
            </UserButton.UserProfilePage>
        </UserButton>
    );
};