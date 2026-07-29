import React from 'react';
import { Modal } from '../common/Modal';
import { ExternalLink, Cpu, CheckCircle2, AlertCircle, Layers, ShieldCheck, Zap } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa6';
import { Button } from '../common/Button';

export function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Case Study: ${project.title}`} maxWidth="max-w-4xl">
      <div className="space-y-8">
        
        {/* Header Hero Banner */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 h-64 sm:h-72">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent flex flex-col justify-end p-6">
            <span className="px-3 py-1 rounded-full bg-zinc-900/90 text-zinc-300 border border-zinc-700 text-xs font-mono w-fit mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-300 mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Key Performance Stats Bar */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center font-mono">
            {Object.entries(project.stats).map(([key, val]) => (
              <div key={key}>
                <div className="text-xl sm:text-2xl font-bold text-white">{val}</div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
          </div>
        )}

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-400 uppercase">
              <AlertCircle className="w-4 h-4 text-zinc-400" />
              <span>The Client Bottleneck</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-700/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white uppercase">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Diagram / Flow */}
        <div className="p-6 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-4 font-mono">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white uppercase tracking-wider">
            <Layers className="w-4 h-4 text-zinc-400" />
            <span>Technical System Architecture</span>
          </div>
          <div className="space-y-2">
            {project.architecture.map((node, i) => (
              <div key={i} className="flex items-start gap-3 text-xs text-zinc-300 p-2.5 rounded-lg bg-black/60 border border-zinc-800">
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-white text-[10px]">Step 0{i + 1}</span>
                <span>{node}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Engineering Challenges */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Engineering Challenges Overcome</span>
          </h4>
          <ul className="space-y-2 text-xs text-zinc-300">
            {project.challenges.map((c, idx) => (
              <li key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/80">
                <span className="text-zinc-500 font-mono">▸</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Matrix */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Measurable Outcome */}
        <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/50 text-emerald-300 text-sm font-medium flex items-center gap-3">
          <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
          <span><strong>Business Outcome:</strong> {project.outcome}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-800">
          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            icon={Github}
            iconPosition="left"
          >
            Source Code on GitHub
          </Button>
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            icon={ExternalLink}
          >
            View Live Demo
          </Button>
        </div>

      </div>
    </Modal>
  );
}
