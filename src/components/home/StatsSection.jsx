import { BookOpen, Users, Zap, Globe } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: BookOpen, label: 'Articles Published', value: '450+', emoji: '📚' },
    { icon: Users, label: 'Active Readers', value: '12K+', emoji: '👥' },
    { icon: Zap, label: 'Reading Time Saved', value: '500+ hrs', emoji: '⚡' },
    { icon: Globe, label: 'Countries Reached', value: '85+', emoji: '🌍' },
  ];

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)', color: 'white' }}>
      <div className="container-lg">
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="display-5 fw-bold text-white mb-3">By The Numbers</h2>
          <p className="lead text-white-50">
            Join a thriving community of readers and writers
          </p>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => {
            return (
              <div 
                key={index} 
                className="col-sm-6 col-lg-3 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="text-center p-4 rounded-lg animate-glow"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #f97316, #d4af37)',
                      borderRadius: '12px',
                      fontSize: '28px'
                    }}
                  >
                    {stat.emoji}
                  </div>
                  <h3 className="display-6 fw-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-white-50 mb-0">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}