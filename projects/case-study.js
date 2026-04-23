const projects = {
	'contact-to-account-matching-flow': {
		badge: 'Service Cloud Automation',
		title: 'Contact-to-Account Matching Flow',
		summary:
			'Designed a guided Salesforce flow to remove manual merchant matching, improve record accuracy, and standardize the way support teams connected people to the right account.',
		metrics: [
			{ value: '100%', label: 'accurate linkage after automation' },
			{ value: 'Faster', label: 'agent handoff and case resolution' },
			{ value: 'Fewer', label: 'manual merges and rework' },
			{ value: 'Cleaner', label: 'routing and account data' }
		],
		businessCase: [
			'Support teams were spending too much time manually linking contacts to accounts, which created delays, duplicate records, and inconsistent case handling.',
			'The business needed a guided, repeatable process that would preserve data quality while making the workflow easier for agents to follow.'
		],
		solutionDesign: [
			'Used a guided Screen Flow to collect the right identifiers and present only the relevant account options.',
			'Added validation checks so users could not complete the process with incomplete or conflicting data.',
			'Trapped the automation into a support-friendly experience that reduced switching between screens and record edits.'
		],
		poc: [
			'Built a proof-of-concept flow with a small set of test records.',
			'Validated the logic against common edge cases like duplicate merchants, missing fields, and incorrect matches.',
			'Confirmed that the output was consistent enough to move into a broader support process.'
		],
		implementation: [
			'Mapped the business rules for identifying the right account and identifying failure points.',
			'Configured the flow screens, decision logic, and record update actions.',
			'Tested the experience with support users and refined labels, prompts, and error handling.',
			'Deployed the change with monitoring so the team could validate accuracy in live usage.'
		],
		impact: [
			'Improved data accuracy by standardizing the matching journey.',
			'Reduced manual effort for support agents.',
			'Created a repeatable pattern that can be reused across similar service processes.'
		],
		screenshots: [
			{
				title: 'Flow entry screen',
				description: 'Shows the guided entry experience used to capture the information needed for matching.'
			},
			{
				title: 'Account selection logic',
				description: 'Illustrates the decision path used to identify the correct account record.'
			},
			{
				title: 'Post-save result',
				description: 'Shows the successful record update and the cleaner support handoff.'
			}
		]
	},
	'quick-text-framework-standardization': {
		badge: 'Operations Efficiency',
		title: 'Quick Text Framework Standardization',
		summary:
			'Created a reusable Quick Text and response framework so agents could reply faster while keeping tone, structure, and content consistent across the team.',
		metrics: [
			'Lower AHT',
			'Consistent replies',
			'Clear ownership',
			'Less rework'
		].map((value) => ({ value, label: 'delivery outcome' })),
		businessCase: [
			'Inconsistent responses were causing avoidable back-and-forth, longer handling time, and a harder quality review process.',
			'The team needed a controlled communication framework that was easy to adopt and maintain over time.'
		],
		solutionDesign: [
			'Defined a structured set of response templates for the most common customer scenarios.',
			'Established naming conventions, ownership rules, and versioning guidance for the templates.',
			'Kept the framework simple enough for fast adoption but strong enough to support quality control.'
		],
		poc: [
			'Tested the top recurring customer questions against draft Quick Text responses.',
			'Reviewed the tone, completeness, and repeatability of each draft with stakeholders.',
			'Refined the templates until the team could use them without extra explanation.'
		],
		implementation: [
			'Created the initial template library and grouped responses by scenario.',
			'Applied naming standards and ownership guidance so the library stayed maintainable.',
			'Rolled out the framework with coaching for the support team and monitored adoption.',
			'Tightened the content based on real usage and feedback from agents and reviewers.'
		],
		impact: [
			'Improved consistency in customer communication.',
			'Reduced time spent drafting repeat answers.',
			'Created a reusable operating model for service teams.'
		],
		screenshots: [
			{ title: 'Template library view', description: 'Illustrates the organized Quick Text library structure.' },
			{ title: 'Agent response example', description: 'Shows how a template is used inside a live support reply.' },
			{ title: 'Naming and ownership pattern', description: 'Demonstrates the governance model behind the template set.' }
		]
	},
	'permission-set-and-release-governance': {
		badge: 'Secure Delivery',
		title: 'Permission Set and Release Governance',
		summary:
			'Modernized access control and delivery governance by shifting from rigid, hard-to-audit patterns to a more scalable permission model and release discipline.',
		metrics: [
			{ value: 'Safer', label: 'access changes' },
			{ value: 'Cleaner', label: 'audit posture' },
			{ value: 'Predictable', label: 'release process' },
			{ value: 'Lower-risk', label: 'deployment flow' }
		],
		businessCase: [
			'Legacy access models made it difficult to understand who could do what, and releases carried more risk than necessary.',
			'The organization needed a more traceable and scalable way to manage access and deployment ownership.'
		],
		solutionDesign: [
			'Moved toward Permission Set based access where possible to simplify governance and reduce profile sprawl.',
			'Used repeatable deployment practices to reduce the chance of environment drift and surprise failures.',
			'Defined the change control process so each release had a clear owner, scope, and rollback path.'
		],
		poc: [
			'Validated a small slice of permission changes in a lower-risk test environment.',
			'Compared the old and new access experience to confirm there was no functional regression.',
			'Used the trial to confirm that the release approach was repeatable for future changes.'
		],
		implementation: [
			'Cataloged the current access and deployment process.',
			'Rebuilt the required access model using Permission Sets and documented the responsibilities.',
			'Introduced release checkpoints for testing, sign-off, and deployment verification.',
			'Used post-release checks to confirm access and behavior stayed consistent.'
		],
		impact: [
			'Stronger compliance and clearer access control.',
			'Less release risk through better governance.',
			'An easier model to support and audit.'
		],
		screenshots: [
			{ title: 'Access model comparison', description: 'Shows the governance shift from older access patterns to Permission Sets.' },
			{ title: 'Release checklist', description: 'Illustrates the checkpoints used before deploying changes.' },
			{ title: 'Post-release validation', description: 'Shows the verification steps after deployment.' }
		]
	},
	'fire-door-compliance-lifecycle': {
		badge: 'Compliance Automation',
		title: 'Fire Door Compliance Lifecycle',
		summary:
			'Built a metadata-driven Salesforce solution to track inspections, remedial actions, and compliance visibility from the first failure through to final resolution.',
		metrics: [
			{ value: 'End-to-end', label: 'compliance tracking' },
			{ value: 'Faster', label: 'remediation visibility' },
			{ value: 'No-Apex', label: 'declarative delivery' },
			{ value: 'Audit-ready', label: 'process history' }
		],
		businessCase: [
			'Inspection failures and repairs needed an auditable lifecycle instead of scattered manual follow-up and disconnected records.',
			'The team needed visibility across assets, work orders, and cases without creating a fragile custom-code solution.'
		],
		solutionDesign: [
			'Designed a declarative model that linked the inspection record to the related work and case records.',
			'Used Flow and metadata to keep the process logic consistent and maintainable.',
			'Added outcome tracking so operational teams could see what happened at each stage of remediation.'
		],
		poc: [
			'Proved that the inspection-to-remediation chain could work using only declarative tools.',
			'Validated record updates, status transitions, and follow-on actions in a test dataset.',
			'Confirmed the lifecycle was manageable without adding Apex.'
		],
		implementation: [
			'Mapped the inspection lifecycle and the required data relationships.',
			'Implemented the automation for updates, case closure, and remediation tracking.',
			'Built reporting-friendly field patterns for compliance oversight.',
			'Tested the flow with real-world scenarios and edge cases before release.'
		],
		impact: [
			'Clearer compliance visibility.',
			'Less manual chasing across teams.',
			'A dependable, deployable process for ongoing maintenance.'
		],
		screenshots: [
			{ title: 'Inspection record', description: 'Shows the starting point for the compliance lifecycle.' },
			{ title: 'Remediation path', description: 'Illustrates the linked work order and case updates.' },
			{ title: 'Reporting view', description: 'Displays the fields used for operational compliance reporting.' }
		]
	},
	'personal-finance-management-app': {
		badge: 'Financial Operations',
		title: 'Personal Finance Management App',
		summary:
			'Designed a Salesforce-based personal finance solution to manage statement ingestion, transaction categorisation, shared contributions, and repayment workflows.',
		metrics: [
			{ value: 'Structured', label: 'budget tracking' },
			{ value: 'Clearer', label: 'repayment visibility' },
			{ value: 'Automated', label: 'reminders and flows' },
			{ value: 'Privacy-aware', label: 'data handling' }
		],
		businessCase: [
			'Manual tracking of spending and repayments made financial oversight fragmented and time-consuming.',
			'The solution needed to be structured, searchable, and flexible enough to handle monthly contributions and debt management.'
		],
		solutionDesign: [
			'Used custom objects and automation to model budgets, transactions, and repayment milestones.',
			'Built ingestion and scheduling patterns so statements and reminders could be handled consistently.',
			'Kept the design lean so the app stayed easy to maintain and extend.'
		],
		poc: [
			'Tested the core data model with a sample month of transactions and repayment records.',
			'Validated that the automation could parse the uploaded data and keep the flows stable.',
			'Confirmed that the reporting view matched the intended monthly workflow.'
		],
		implementation: [
			'Created the financial data model and related automation.',
			'Configured the recurring reminders and import flows.',
			'Added dashboards and tracking fields to support month-end reviews.',
			'Refined the experience after testing with sample real-life scenarios.'
		],
		impact: [
			'Improved clarity around spending and repayments.',
			'Less manual effort at month end.',
			'A reusable personal finance pattern with room to grow.'
		],
		screenshots: [
			{ title: 'Financial dashboard', description: 'Shows the overview used for monthly budget tracking.' },
			{ title: 'Import workflow', description: 'Illustrates the upload and categorisation process.' },
			{ title: 'Repayment timeline', description: 'Shows the fields that keep repayments and contributions visible.' }
		]
	}
};

function escapeHtml(value) {
	return String(value)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function renderList(items) {
	return items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
}

function renderMetrics(items) {
	return items
		.map(
			(metric) => `
				<article class="metric">
					<strong>${escapeHtml(metric.value)}</strong>
					<span>${escapeHtml(metric.label)}</span>
				</article>
			`
		)
		.join('');
}

function renderScreenshots(items) {
	return items
		.map(
			(item) => `
				<figure class="shot-card">
					<div class="shot-frame">
						<div class="shot-mock-window">
							<div class="shot-mock-line"></div>
							<div class="shot-mock-line short"></div>
							<div class="shot-mock-card"></div>
							<div class="shot-mock-card"></div>
						</div>
					</div>
					<figcaption class="shot-caption">
						<strong>${escapeHtml(item.title)}</strong>
						${escapeHtml(item.description)}
					</figcaption>
				</figure>
			`
		)
		.join('');
}

function renderProject(project) {
	return `
		<section class="detail-hero">
			<article class="hero-panel">
				<span class="section-label">${escapeHtml(project.badge)}</span>
				<h1>${escapeHtml(project.title)}</h1>
				<p>${escapeHtml(project.summary)}</p>
				<div class="hero-actions">
					<a class="primary-link" href="../index.html#projects">Back to Projects</a>
					<a class="primary-link" href="../index.html#contact">Contact Nnamdi</a>
				</div>
				<div class="metric-grid">
					${renderMetrics(project.metrics)}
				</div>
			</article>
			<aside class="side-panel">
				<h2>Project at a Glance</h2>
				<ul class="summary-list">
					<li>
						<strong>Business Case</strong>
						The problem the business needed to solve and why it mattered.
					</li>
					<li>
						<strong>Solution Design</strong>
						The architecture and operating pattern used to solve it.
					</li>
					<li>
						<strong>POC</strong>
						How the idea was proven before the full rollout.
					</li>
					<li>
						<strong>Implementation</strong>
						The delivery steps, validation, and release approach.
					</li>
				</ul>
			</aside>
		</section>

		<section class="content-grid">
			<article class="content-card">
				<h2>Business Case</h2>
				<ul>
					${renderList(project.businessCase)}
				</ul>
			</article>

			<article class="content-card">
				<h2>Solution Design</h2>
				<ul>
					${renderList(project.solutionDesign)}
				</ul>
			</article>

			<article class="content-card">
				<h2>POC</h2>
				<ul>
					${renderList(project.poc)}
				</ul>
			</article>

			<article class="content-card">
				<h2>Implementation Steps</h2>
				<ol>
					${renderList(project.implementation)}
				</ol>
			</article>

			<article class="content-card">
				<h2>Screenshots</h2>
				<p>
					These panels are ready for screenshots of the implemented solution. Add real images later by replacing the placeholder cards with project captures.
				</p>
				<div class="case-study-gallery">
					${renderScreenshots(project.screenshots)}
				</div>
			</article>

			<article class="content-card">
				<h2>Results and Impact</h2>
				<ul>
					${renderList(project.impact)}
				</ul>
				<div class="footer-actions">
					<a class="primary-link" href="../index.html#projects">Back to Portfolio</a>
					<a class="primary-link" href="../index.html#contact">Work With Nnamdi</a>
				</div>
			</article>
		</section>
	`;
}

function renderNotFound() {
	const links = Object.entries(projects)
		.map(
			([slug, project]) => `
				<li>
					<a class="primary-link" href="case-study.html?project=${encodeURIComponent(slug)}">${escapeHtml(project.title)}</a>
				</li>
			`
		)
		.join('');

	return `
		<section class="detail-hero">
			<article class="hero-panel">
				<span class="section-label">Project not found</span>
				<h1>Choose a featured case study</h1>
				<p>The requested project does not exist yet. Pick one of the available featured projects below.</p>
			</article>
		</section>
		<section class="content-card">
			<h2>Available Projects</h2>
			<ul>${links}</ul>
		</section>
	`;
}

const projectKey = new URLSearchParams(window.location.search).get('project');
const project = projects[projectKey];

const app = document.getElementById('app');
app.innerHTML = project ? renderProject(project) : renderNotFound();
