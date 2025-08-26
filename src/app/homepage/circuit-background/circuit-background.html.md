<svg id="group-01" width="100%" height="90vh" viewBox="0 0 100% 90vh" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <!-- Create the gradients -->
        <radialGradient id="purple-fade" cx="0" cy="0" fx="0" fy="0" r="200" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5332D5" stop-opacity="1" offset="0" />
            <stop stop-color="#0E1216" stop-opacity="0" offset="1" />
        </radialGradient>

        <!-- Create the moving masks for the glowing points -->
        @for (path of paths; track $index) {
            <path id="circ-{{ $index }}" [attr.d]="path.path" />
            <mask id="tail-{{ $index }}" maskUnits="userSpaceOnUse">
                <use style="fill:none;stroke:#fff;stroke-width:2;stroke-dasharray:100% -100%" attr.xlink:href="#circ-{{ $index }}">
                    <animate attributeName="stroke-dashoffset" from="100%" to="-100%"
                    attr.dur="{{ path.length }}s"
                    attr.begin="{{ path.delay }}s;anim{{ $index }}.end+{{ loop_time - path.length }}s"
                    />
                </use>
            </mask>
        }
    </defs>
    <!-- Draw the paths -->
    @for (path of paths; track $index) {
        <g attr.style="mask:url(#tail-{{ $index }})">
            <circle style="fill:url(#purple-fade);" cx="0" cy="0" r="200">
                <animateMotion id="anim{{ $index }}" keyPoints="0;1" keyTimes="0;1" 
                attr.dur="{{ path.length }}s"
                attr.begin="{{ path.delay }}s;anim{{ $index }}.end+{{ loop_time - path.length }}s"
                >
                    <mpath attr.xlink:href="#circ-{{ $index }}" />
                </animateMotion>
            </circle>
        </g>
        <path [attr.d]="path.path"
                stroke="#7C4DFF"
                stroke-opacity="0.08"
                stroke-width="4"
                fill="none" />
    }
</svg>
