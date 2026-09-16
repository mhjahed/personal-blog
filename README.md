<!-- PERSONAL BLOG PLATFORM · accent #f97316 / navy #1a365d · widgets verified 2026-09-12 -->

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:1a365d,100:f97316&height=190&section=header&text=PERSONAL%20BLOG%20PLATFORM&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=cms%20%C2%B7%20search%20%C2%B7%20comments%20%C2%B7%20newsletter%20%E2%80%94%20react%2018%20%2B%20vite&descSize=16&descAlignY=60" alt="Personal Blog Platform" />

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2600&pause=900&color=F97316&center=true&vCenter=true&width=740&height=95&lines=cms+%C2%B7+search+%C2%B7+comments+%C2%B7+newsletter;admin+panel+%E2%80%94+full+crud+at+%2Fadmin-secret;deployed+at+the+edge+%E2%80%94+cloudflare+workers" alt="typing" />

<p>
  <img src="https://img.shields.io/badge/react-18-0d1117?style=for-the-badge&logo=react&logoColor=61dafb" alt="react" />
  <img src="https://img.shields.io/badge/vite-build-0d1117?style=for-the-badge&logo=vite&logoColor=bd34fe" alt="vite" />
  <img src="https://img.shields.io/badge/bootstrap-5-0d1117?style=for-the-badge&logo=bootstrap&logoColor=7952b3" alt="bootstrap" />
  <img src="https://img.shields.io/badge/zustand-state-0d1117?style=for-the-badge&logoColor=f97316" alt="zustand" />
  <img src="https://img.shields.io/badge/cloudflare-edge-f97316?style=for-the-badge&logo=cloudflare&logoColor=white" alt="cloudflare" />
  <img src="https://img.shields.io/badge/license-MIT-0d1117?style=for-the-badge&logoColor=f97316" alt="license" />
</p>

</div>

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:1a365d,50:f97316,100:1a365d&height=3" alt="" />

## ▍$ cat overview.txt

A **production-ready blogging platform** — the public home for my writing on
cyber threats, crime analysis, and technology. Full content management, real-time
search, and an admin command room, all served from the Cloudflare edge.
No backend server anywhere: state flows through Zustand, content ships as JSON,
and the whole site deploys to a global CDN.

```yaml
status    : in production
live      : personal-blog.jah267478.workers.dev
stack     : react 18 · vite · bootstrap 5 · zustand · router · lucide
data      : json content layer (blogs.json · authors.json)
admin     : full crud · gate at /admin-secret
hosting   : cloudflare pages (edge) · cold start ≈ 0
```

<div align="center">

**[▸ LIVE SITE](https://personal-blog.jah267478.workers.dev/)** · **[▸ SOURCE](https://github.com/mhjahed/personal-blog)**

</div>

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:1a365d,50:f97316,100:1a365d&height=3" alt="" />

## ▍$ ls features/

<table>
<tr>
<td width="50%" valign="top">

**`// reading experience`**

▸ hero + featured article rail
▸ full blog reader with author bio
▸ reading-time estimation
▸ related-article recommendations
▸ likes, views and engagement tracking
▸ comment threads per article

</td>
<td width="50%" valign="top">

**`// discovery`**

▸ real-time search — title, tags, author
▸ filter by category and multi-tag select
▸ sort by newest · oldest · popular · trending
▸ instant filtering, zero page reloads

**`// writers`**

▸ author pages — stats, history, socials

</td>
</tr>
<tr>
<td width="50%" valign="top">

**`// admin room (/admin-secret)`**

▸ create · edit · delete articles
▸ toggle trending / favorite / secret flags
▸ passcode gate (`admin123` — change in prod)
▸ JSON export for one-click backups

</td>
<td width="50%" valign="top">

**`// growth`**

▸ newsletter subscription form
▸ functional contact page
▸ social share buttons
▸ fully responsive — 320px → 1920px+

</td>
</tr>
</table>

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:1a365d,50:f97316,100:1a365d&height=3" alt="" />

## ▍$ cat stack.json

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,bootstrap,cloudflare,js&perline=9" alt="stack" />
</div>

<br/>

| LAYER | TECH | JOB |
|---|---|---|
| ui | **React 18** | component tree |
| build | **Vite** | dev server + optimized bundles |
| pages | **React Router** | client-side navigation |
| styling | **Bootstrap 5** | grid + base components |
| state | **Zustand** | lightweight global store |
| icons | **Lucide React** | sharp, consistent icon set |
| type | **DM Sans · Poppins** | body + headings |
| host | **Cloudflare Pages** | edge deployment, global CDN |

**design tokens** — `--primary-dark: #1a365d` · `--accent-orange: #f97316` · `--primary-light: #ebf2f7`

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:1a365d,50:f97316,100:1a365d&height=3" alt="" />

## ▍$ ./setup

```bash
# 1. clone
git clone https://github.com/mhjahed/personal-blog.git
cd personal-blog

# 2. install + run (node 16+)
npm install
npm run dev          # → http://localhost:5173

# 3. production
npm run build        # → dist/  (deploy to cloudflare pages / vercel / netlify)
```

**publish a new article**

```bash
# edit src/data/blogs.json — append a post object
# (see schema below), then:
npm run build && git add . && git commit -m "post: <title>" && git push
# cloudflare redeploys automatically
```

<details>
<summary><b>▸ post schema (blogs.json)</b></summary>

```json
{
  "id": 9,
  "title": "Article title",
  "subHeading": "Catchy subtitle",
  "body": "Full content…",
  "ending": "Conclusion…",
  "analysis": "Key insights…",
  "category": "Cyber Security",
  "tags": ["threats", "analysis"],
  "author": { "id": 1, "name": "MH JAHED", "bio": "…", "avatar": "https://…" },
  "publishDate": "2026-07-21",
  "readingTime": 10,
  "imageUrl": "https://…",
  "views": 0,
  "likes": 0,
  "features": { "trending": false, "favorite": false, "secret": false }
}
```
</details>

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:1a365d,50:f97316,100:1a365d&height=3" alt="" />

## ▍$ grep -i next roadmap.txt

- ▸ backend api + database (mongodb / postgresql)
- ▸ real auth + comment moderation
- ▸ email notifications for subscribers
- ▸ dark mode toggle + multi-language
- ▸ search analytics + seo hardening

<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:1a365d,50:f97316,100:1a365d&height=3" alt="" />

## ▍stats

| METRIC | VALUE |
|---|---|
| components | 15+ |
| pages | 6 |
| lines of code | 3000+ |
| lighthouse | 95+ |
| first paint | < 1.5 s |

<br/>

<div align="center">

`design inspiration: editorial · atlantic technological university`
`built end-to-end by` **[MH JAHED](https://github.com/mhjahed)** · **[live →](https://personal-blog.jah267478.workers.dev/)** · support: `ascendancyadvisorinc@gmail.com`

</div>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:f97316,100:1a365d&height=110&section=footer" alt="" />
