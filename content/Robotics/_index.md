{{ partial "header.html" . }}
	<main>
        {{ .Content }}
        {{ range .Paginator.Pages }}
			{{ partial "summary.html" . }}
		{{ end }}
		{{ partial "pagination.html" . }}
	</main>
{{ partial "sidebar.html" . }}
{{ partial "footer.html" . }}