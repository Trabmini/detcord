const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50"
        style={{
          backgroundImage: "url('/images/fog.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
<div className="absolute inset-0">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/images/fog.gif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: 0,
    }}
  />
  <div className="absolute inset-0 bg-black/75 z-[1]" /> 
</div>
