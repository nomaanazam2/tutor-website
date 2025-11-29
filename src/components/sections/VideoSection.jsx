import { Play } from "lucide-react";
import Section from "../../utility/Section";

const VideoCard = ({ title, duration, videoId, level, onClick }) => (
  <div
    className="group cursor-pointer bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-colors"
    onClick={() => onClick(videoId)}
  >
    <div className="relative aspect-video bg-black/50 overflow-hidden">
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        alt="Video thumbnail"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
          <Play size={24} className="text-indigo-600 ml-1" />
        </div>
      </div>
      <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold">
        {duration}
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition-colors mb-1">
        {title}
      </h4>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
        {level}
      </span>
    </div>
  </div>
);

const VideoSection = ({ onPlayVideo }) => (
  <Section id="videos" className="bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Sample Lessons</h2>
        <p className="mt-4 text-slate-400">
          Watch short clips to understand my teaching methodology.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Pass real YouTube IDs here */}
        <VideoCard
          title="Algebra Basics"
          duration="10:00"
          videoId="NybHckSEQBI"
          level="Middle School"
          onClick={onPlayVideo}
        />
        <VideoCard
          title="IGCSE Trigonometry"
          duration="8:45"
          videoId="NybHckSEQBI"
          level="IGCSE / Class 10"
          onClick={onPlayVideo}
        />
        <VideoCard
          title="Calculus Limits"
          duration="6:15"
          videoId="NybHckSEQBI"
          level="High School"
          onClick={onPlayVideo}
        />
      </div>
    </div>
  </Section>
);

export default VideoSection;
