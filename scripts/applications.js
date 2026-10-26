"use strict";
(() => {
  const form = document.getElementById('hac-application');
  if (!form) return;
  const type = document.getElementById('apply-type');
  const leadGroup = document.getElementById('apply-lead-group');
  const status = document.getElementById('apply-status');
  const labels = {member:'Community member',circle_lead:'Volunteer Circle lead',contributor:'Knowledge contributor / mentor',partner:'Partner / collaborator'};
  function update() { const isLead = type.value === 'circle_lead'; leadGroup.hidden = !isLead; }
  type.addEventListener('change', update);
  const queryType = new URLSearchParams(location.search).get('type');
  if (Object.hasOwn(labels, queryType)) type.value = queryType;
  update();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.hidden = true;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const category = labels[data.get('type')] || 'Community member';
    const clean = value => String(value ?? '').replace(/[\r\n]+/g,' ').trim();
    const subject = `[Humanity AI Circle] ${category} application`;
    const body = ['Application type: '+category,'Name: '+clean(data.get('name')),'Email: '+clean(data.get('email')),'City/Country: '+clean(data.get('location')),'', 'What I would like to learn, share or build:',String(data.get('interest')||'').trim(),...(data.get('type') === 'circle_lead'?['','Proposed circle / leadership approach:',String(data.get('lead_plan')||'').trim()]:[]),'','Consent: Yes — review my application details.','Source: Website application form'];
    const url = 'mailto:humanityaicircle@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body.join('\n'));
    status.textContent = 'Your email app should open with a draft. Please review and press Send there. This website has NOT submitted your application automatically.';
    status.hidden = false;
    window.location.href = url;
  });
})();
