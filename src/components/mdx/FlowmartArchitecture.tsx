export function FlowmartArchitecture() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden not-prose my-10">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-gray-900/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-border" />
            <div className="w-2 h-2 rounded-full bg-border" />
            <div className="w-2 h-2 rounded-full bg-border" />
          </div>
          <div className="font-mono text-[11px] text-muted-foreground tracking-[0.06em] ml-2">flowmart-system-architecture.svg · Microservices on AWS EKS</div>
        </div>
        <div className="font-mono text-[10px] text-muted-foreground bg-background border border-border px-2 py-0.5 rounded-sm tracking-[0.06em] hidden sm:block">MONOCHROME · TECHNICAL</div>
      </div>
      <div className="p-8 md:p-12 min-h-[360px] flex items-center justify-center overflow-x-auto bg-[#0B0F19]">
        <svg width="720" height="320" viewBox="0 0 720 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[720px]">
          <defs>
            <pattern id="sgrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1a2234" strokeWidth="0.5"></path>
            </pattern>
          </defs>
          <rect width="720" height="320" fill="url(#sgrid)"></rect>
          <rect x="20" y="20" width="110" height="40" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="75" y="35" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="9" textAnchor="middle" letterSpacing="0.06em">CLIENT LAYER</text>
          <text x="75" y="51" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">Web · Mobile · API</text>
          <line x1="130" y1="40" x2="160" y2="40" stroke="#2D3748" strokeWidth="1" strokeDasharray="4,2"></line>
          <polygon points="160,36 168,40 160,44" fill="#38BDF8"></polygon>
          <rect x="168" y="16" width="120" height="48" rx="2" fill="#0D1220" stroke="#38BDF8" strokeWidth="1"></rect>
          <text x="228" y="35" fill="#38BDF8" fontFamily="JetBrains Mono,monospace" fontSize="9" textAnchor="middle" letterSpacing="0.06em">API GATEWAY</text>
          <text x="228" y="50" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">Kong · Rate Limit · Auth</text>
          <line x1="228" y1="64" x2="228" y2="95" stroke="#2D3748" strokeWidth="1" strokeDasharray="4,2"></line>
          <polygon points="224,95 228,103 232,95" fill="#38BDF8"></polygon>
          <rect x="100" y="103" width="260" height="48" rx="2" fill="#0A1020" stroke="#374151" strokeWidth="1"></rect>
          <text x="230" y="122" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="9" textAnchor="middle" letterSpacing="0.08em">EVENT BUS — APACHE KAFKA</text>
          <text x="230" y="140" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">orders · inventory · payments · notifications</text>
          <line x1="145" y1="151" x2="145" y2="180" stroke="#2D3748" strokeWidth="1" strokeDasharray="3,2"></line>
          <rect x="100" y="180" width="90" height="42" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="145" y="197" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="8.5" textAnchor="middle">Order Svc</text>
          <text x="145" y="213" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="7.5" textAnchor="middle">Go · gRPC</text>
          <line x1="245" y1="151" x2="245" y2="180" stroke="#2D3748" strokeWidth="1" strokeDasharray="3,2"></line>
          <rect x="200" y="180" width="90" height="42" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="245" y="197" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="8.5" textAnchor="middle">Inventory Svc</text>
          <text x="245" y="213" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="7.5" textAnchor="middle">Go · REST</text>
          <line x1="345" y1="151" x2="345" y2="180" stroke="#2D3748" strokeWidth="1" strokeDasharray="3,2"></line>
          <rect x="300" y="180" width="90" height="42" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="345" y="197" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="8.5" textAnchor="middle">Payment Svc</text>
          <text x="345" y="213" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="7.5" textAnchor="middle">Go · gRPC</text>
          <line x1="145" y1="222" x2="145" y2="250" stroke="#2D3748" strokeWidth="1" strokeDasharray="3,2"></line>
          <rect x="100" y="250" width="90" height="36" rx="2" fill="#0D1220" stroke="#1F2937" strokeWidth="1"></rect>
          <text x="145" y="264" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">PostgreSQL</text>
          <text x="145" y="278" fill="#4B5563" fontFamily="JetBrains Mono,monospace" fontSize="7" textAnchor="middle">Orders DB</text>
          <line x1="245" y1="222" x2="245" y2="250" stroke="#2D3748" strokeWidth="1" strokeDasharray="3,2"></line>
          <rect x="200" y="250" width="90" height="36" rx="2" fill="#0D1220" stroke="#1F2937" strokeWidth="1"></rect>
          <text x="245" y="264" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">PostgreSQL</text>
          <text x="245" y="278" fill="#4B5563" fontFamily="JetBrains Mono,monospace" fontSize="7" textAnchor="middle">Inventory DB</text>
          <line x1="345" y1="222" x2="345" y2="250" stroke="#2D3748" strokeWidth="1" strokeDasharray="3,2"></line>
          <rect x="300" y="250" width="90" height="36" rx="2" fill="#0D1220" stroke="#1F2937" strokeWidth="1"></rect>
          <text x="345" y="264" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">DynamoDB</text>
          <text x="345" y="278" fill="#4B5563" fontFamily="JetBrains Mono,monospace" fontSize="7" textAnchor="middle">Payments</text>
          <rect x="440" y="16" width="130" height="42" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="505" y="33" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="9" textAnchor="middle" letterSpacing="0.05em">AWS EKS CLUSTER</text>
          <text x="505" y="49" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">us-east-1 · 3 node pools</text>
          <rect x="440" y="76" width="130" height="38" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="505" y="91" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="9" textAnchor="middle">Helm + ArgoCD</text>
          <text x="505" y="107" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">GitOps · CD Pipeline</text>
          <rect x="440" y="132" width="130" height="38" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="505" y="147" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="9" textAnchor="middle">Redis Cluster</text>
          <text x="505" y="163" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">Session · Cache · Rate Limit</text>
          <rect x="440" y="188" width="130" height="38" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="505" y="203" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="9" textAnchor="middle">Prometheus + Grafana</text>
          <text x="505" y="219" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">Metrics · Alerting · SLOs</text>
          <rect x="440" y="244" width="130" height="38" rx="2" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="505" y="259" fill="#94A3B8" fontFamily="JetBrains Mono,monospace" fontSize="9" textAnchor="middle">Terraform</text>
          <text x="505" y="275" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" textAnchor="middle">IaC · State in S3</text>
          <line x1="440" y1="37" x2="440" y2="263" stroke="#1F2937" strokeWidth="1"></line>
          <line x1="440" y1="37" x2="430" y2="37" stroke="#1F2937" strokeWidth="1"></line>
          <line x1="440" y1="95" x2="430" y2="95" stroke="#1F2937" strokeWidth="1"></line>
          <line x1="440" y1="151" x2="430" y2="151" stroke="#1F2937" strokeWidth="1"></line>
          <line x1="440" y1="207" x2="430" y2="207" stroke="#1F2937" strokeWidth="1"></line>
          <line x1="440" y1="263" x2="430" y2="263" stroke="#1F2937" strokeWidth="1"></line>
          <rect x="590" y="16" width="120" height="100" rx="2" fill="#0A0E1A" stroke="#1F2937" strokeWidth="1"></rect>
          <text x="600" y="30" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8" letterSpacing="0.08em">LEGEND</text>
          <line x1="600" y1="36" x2="700" y2="36" stroke="#1F2937" strokeWidth="0.5"></line>
          <rect x="600" y="42" width="12" height="8" rx="1" fill="#0D1220" stroke="#38BDF8" strokeWidth="1"></rect>
          <text x="618" y="51" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8">Core Service</text>
          <rect x="600" y="58" width="12" height="8" rx="1" fill="#0D1220" stroke="#2D3748" strokeWidth="1"></rect>
          <text x="618" y="67" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8">Data Store</text>
          <line x1="600" y1="74" x2="612" y2="74" stroke="#2D3748" strokeWidth="1" strokeDasharray="3,2"></line>
          <text x="618" y="78" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8">Async Event</text>
          <line x1="600" y1="90" x2="612" y2="90" stroke="#2D3748" strokeWidth="1"></line>
          <text x="618" y="94" fill="#64748B" fontFamily="JetBrains Mono,monospace" fontSize="8">Sync Request</text>
          <text x="600" y="110" fill="#4B5563" fontFamily="JetBrains Mono,monospace" fontSize="7">AWS EKS · ap-south-1</text>
        </svg>
      </div>
    </div>
  );
}
