document.addEventListener('DOMContentLoaded', function() {
    const importantEvents = [
        { date: 'Oct 23', event: 'Research Submission Deadline' },
        { date: 'Nov 20', event: 'Science Fair' },
        { date: 'Dec 5', event: 'Project Presentation' },
        { date: 'Dec 15', event: 'Final Exams' }
    ];

    const latestAnnouncement = {
        title: 'Latest Announcement',
        description: 'Important updates regarding upcoming research submission deadlines and events.'
    };

    // Populate important events
    const eventsList = document.getElementById('important-events-list');
    importantEvents.forEach(event => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${event.event} - ${event.date}`;
        eventsList.appendChild(listItem);
    });

    // Populate latest announcement
    document.getElementById('latest-announcement-title').textContent = latestAnnouncement.title;
    document.getElementById('latest-announcement-description').textContent = latestAnnouncement.description;
});
