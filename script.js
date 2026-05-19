function showPath(pathId) {
    // Verstecke alle Pfade
    document.querySelectorAll('.path-section').forEach(section => {
        section.classList.remove('active');
    });

    // Zeige den ausgewählten Pfad
    const activeSection = document.getElementById(pathId);
    activeSection.classList.add('active');

    // Kurze Pause, damit die Kachel im Hintergrund fertig geladen ist
    setTimeout(() => {
        // Puffer auf 250 Pixel: Das gleicht aus, dass der Header beim Scrollen Platz wegnimmt und die Kachel nach oben zieht.
        const headerOffset = 250; 
        
        // Berechne die aktuelle Position der Kachel und ziehe den riesigen Puffer ab
        const elementPosition = activeSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        // Scrolle exakt dorthin
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }, 50);
}

// Scroll-Event für den minimierenden Header mit Anti-Flacker-Puffer (Hysterese)
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    
    // Erst verkleinern, wenn man deutlich nach unten gescrollt ist
    if (window.scrollY > 80) {
        header.classList.add('shrink');
    } 
    // Erst wieder vergrößern, wenn man fast ganz oben angekommen ist
    else if (window.scrollY < 20) {
        header.classList.remove('shrink');
    }
});