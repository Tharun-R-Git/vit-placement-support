type VideoSectionProps = {
    weekNumber: number
  }
  
  export function VideoSection({ weekNumber }: VideoSectionProps) {
    // This would be replaced with actual video data fetched from an API or database
    const videos = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `Video ${i + 1} for Week ${weekNumber}`,
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube IDs
    }))
  
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Video Lessons</h3>
        {videos.map((video) => (
          <div key={video.id}>
            <h4 className="font-medium mb-2">{video.title}</h4>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    )
  }
  
  