interface MonogramProps {
  isVisible: boolean;
}

const Monogram: React.FC<MonogramProps> = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-40 text-xl font-semibold">GJ</div>
  );
};

export default Monogram;
