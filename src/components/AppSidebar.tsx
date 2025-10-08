import { MessageSquare, Library, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const chatHistory = {
  today: [
    "Security threat analysis",
    "Incident response protocol",
    "Network vulnerability scan",
    "Compliance audit review",
  ],
  yesterday: [
    "Malware detection patterns",
    "Firewall configuration help",
    "Data breach investigation",
  ],
};

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent className="flex flex-col gap-4 p-4">
        {/* Logo and New Chat */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 px-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {open && (
              <span className="font-semibold text-lg text-foreground">SIEMPLIFY</span>
            )}
          </div>
          
          <Button variant="default" className="w-full justify-start gap-2">
            <MessageSquare className="w-4 h-4" />
            {open && <span>New Chat</span>}
          </Button>
        </div>

        {/* Features */}
        <SidebarGroup>
          <SidebarGroupLabel>FEATURES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/">
                    <MessageSquare className="w-4 h-4" />
                    {open && <span>AI Chat</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/library">
                    <Library className="w-4 h-4" />
                    {open && <span>Library</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Chat History */}
        {open && (
          <>
            <SidebarGroup>
              <SidebarGroupLabel>TODAY</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {chatHistory.today.map((chat, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton className="text-sm">
                        <span className="truncate">{chat}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>YESTERDAY</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {chatHistory.yesterday.map((chat, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton className="text-sm">
                        <span className="truncate">{chat}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}

        {/* Upgrade Card */}
        {open && (
          <div className="mt-auto">
            <div className="relative rounded-xl bg-gradient-primary p-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-glow opacity-50" />
              <div className="relative z-10">
                <div className="flex -space-x-2 mb-3">
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 border-2 border-white">
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-semibold text-white mb-1">Upgrade to Pro</h3>
                <p className="text-xs text-white/80 mb-3">
                  Unlock more power and features
                </p>
                <Button variant="secondary" size="sm" className="w-full bg-white text-primary hover:bg-white/90">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Upgrade
                </Button>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
