const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full from-sky-400 to-blue-800  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
