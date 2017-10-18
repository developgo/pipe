document.body.insertAdjacentHTML('afterBegin', `<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<symbol id="search" viewBox="0 0 32 32">
<path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
</symbol>
<symbol id="focus" viewBox="0 0 28 28">
<path d="M21.82 16.333h-1.987c-0.638 0-1.167-0.529-1.167-1.167v-2.333c0-0.638 0.529-1.167 1.167-1.167h1.987c-0.784-2.625-2.862-4.703-5.487-5.487v1.987c0 0.638-0.529 1.167-1.167 1.167h-2.333c-0.638 0-1.167-0.529-1.167-1.167v-1.987c-2.625 0.784-4.703 2.862-5.487 5.487h1.987c0.638 0 1.167 0.529 1.167 1.167v2.333c0 0.638-0.529 1.167-1.167 1.167h-1.987c0.784 2.625 2.862 4.703 5.487 5.487v-1.987c0-0.638 0.529-1.167 1.167-1.167h2.333c0.638 0 1.167 0.529 1.167 1.167v1.987c2.625-0.784 4.703-2.862 5.487-5.487zM28 12.833v2.333c0 0.638-0.529 1.167-1.167 1.167h-2.607c-0.893 3.919-3.974 7-7.893 7.893v2.607c0 0.638-0.529 1.167-1.167 1.167h-2.333c-0.638 0-1.167-0.529-1.167-1.167v-2.607c-3.919-0.893-7-3.974-7.893-7.893h-2.607c-0.638 0-1.167-0.529-1.167-1.167v-2.333c0-0.638 0.529-1.167 1.167-1.167h2.607c0.893-3.919 3.974-7 7.893-7.893v-2.607c0-0.638 0.529-1.167 1.167-1.167h2.333c0.638 0 1.167 0.529 1.167 1.167v2.607c3.919 0.893 7 3.974 7.893 7.893h2.607c0.638 0 1.167 0.529 1.167 1.167z"></path>
</symbol>
<symbol id="reply" viewBox="0 0 28 28">
<path d="M0 18c0 2.188 1.094 5.047 1.984 7.047 0.172 0.359 0.344 0.859 0.578 1.188 0.109 0.156 0.219 0.266 0.438 0.266 0.313 0 0.5-0.25 0.5-0.547 0-0.25-0.063-0.531-0.078-0.781-0.047-0.641-0.078-1.281-0.078-1.922 0-7.453 4.422-8.75 11.156-8.75h3.5v4c0 0.547 0.453 1 1 1 0.266 0 0.516-0.109 0.703-0.297l8-8c0.187-0.187 0.297-0.438 0.297-0.703s-0.109-0.516-0.297-0.703l-8-8c-0.187-0.187-0.438-0.297-0.703-0.297-0.547 0-1 0.453-1 1v4h-3.5c-5.125 0-11.5 0.906-13.672 6.297-0.656 1.656-0.828 3.453-0.828 5.203z"></path>
</symbol>
<symbol id="google" viewBox="0 0 32 32"><path d="M19.958 16.236q0 2.889-1.208 5.146t-3.444 3.528-5.125 1.271q-2.069 0-3.958-0.806t-3.25-2.167-2.167-3.25-0.806-3.958 0.806-3.958 2.167-3.25 3.25-2.167 3.958-0.806q3.972 0 6.819 2.667l-2.764 2.653q-1.625-1.569-4.056-1.569-1.708 0-3.16 0.861t-2.299 2.34-0.847 3.229 0.847 3.229 2.299 2.34 3.16 0.861q1.153 0 2.118-0.319t1.59-0.799 1.090-1.090 0.681-1.153 0.299-1.028h-5.778v-3.5h9.611q0.167 0.875 0.167 1.694zM32 14.542v2.917h-2.903v2.903h-2.917v-2.903h-2.903v-2.917h2.903v-2.903h2.917v2.903h2.903z"></path></symbol>
<symbol id="wechat" viewBox="0 0 32 32"><path d="M9.062 9.203q0-0.641-0.391-1.031t-1.031-0.391q-0.672 0-1.188 0.398t-0.516 1.023q0 0.609 0.516 1.008t1.188 0.398q0.641 0 1.031-0.383t0.391-1.023zM20.672 17.125q0-0.438-0.398-0.781t-1.023-0.344q-0.422 0-0.773 0.352t-0.352 0.773q0 0.438 0.352 0.789t0.773 0.352q0.625 0 1.023-0.344t0.398-0.797zM16.984 9.203q0-0.641-0.383-1.031t-1.023-0.391q-0.672 0-1.188 0.398t-0.516 1.023q0 0.609 0.516 1.008t1.188 0.398q0.641 0 1.023-0.383t0.383-1.023zM26.906 17.125q0-0.438-0.406-0.781t-1.016-0.344q-0.422 0-0.773 0.352t-0.352 0.773q0 0.438 0.352 0.789t0.773 0.352q0.609 0 1.016-0.344t0.406-0.797zM22.75 10.922q-0.484-0.063-1.094-0.063-2.641 0-4.859 1.203t-3.492 3.258-1.273 4.492q0 1.219 0.359 2.375-0.547 0.047-1.062 0.047-0.406 0-0.781-0.023t-0.859-0.102-0.695-0.109-0.852-0.164-0.781-0.164l-3.953 1.984 1.125-3.406q-4.531-3.172-4.531-7.656 0-2.641 1.523-4.859t4.125-3.492 5.68-1.273q2.75 0 5.195 1.031t4.094 2.852 2.133 4.070zM32 19.688q0 1.828-1.070 3.492t-2.898 3.023l0.859 2.828-3.109-1.703q-2.344 0.578-3.406 0.578-2.641 0-4.859-1.102t-3.492-2.992-1.273-4.125 1.273-4.125 3.492-2.992 4.859-1.102q2.516 0 4.734 1.102t3.555 3 1.336 4.117z"></path></symbol>
<symbol id="weibo" viewBox="0 0 32 32"><path d="M13.242 27.106c-5.22 0.517-9.727-1.847-10.065-5.27-0.339-3.429 3.62-6.618 8.834-7.135 5.22-0.517 9.727 1.847 10.059 5.27 0.345 3.429-3.614 6.624-8.828 7.135zM23.677 15.735c-0.443-0.135-0.751-0.222-0.517-0.806 0.505-1.268 0.554-2.358 0.006-3.14-1.022-1.459-3.823-1.385-7.030-0.037 0 0-1.010 0.437-0.751-0.357 0.492-1.588 0.419-2.912-0.351-3.681-1.742-1.742-6.372 0.068-10.342 4.038-2.967 2.961-4.691 6.119-4.691 8.846 0 5.208 6.686 8.379 13.224 8.379 8.569 0 14.276-4.98 14.276-8.933 0-2.395-2.013-3.749-3.823-4.309z"></path><path d="M29.371 6.193c-2.069-2.296-5.122-3.17-7.942-2.573v0c-0.653 0.142-1.065 0.782-0.923 1.428 0.142 0.653 0.776 1.065 1.428 0.923 2.007-0.425 4.174 0.197 5.645 1.828s1.872 3.854 1.237 5.799v0c-0.203 0.634 0.142 1.311 0.776 1.521 0.634 0.203 1.311-0.142 1.521-0.776v-0.006c0.887-2.721 0.326-5.848-1.742-8.145z"></path><path d="M26.189 9.068c-1.010-1.12-2.499-1.545-3.866-1.25-0.56 0.117-0.917 0.677-0.8 1.237 0.123 0.56 0.677 0.917 1.231 0.794v0c0.671-0.142 1.397 0.068 1.89 0.609 0.492 0.548 0.628 1.293 0.412 1.945v0c-0.172 0.542 0.123 1.133 0.671 1.311 0.548 0.172 1.133-0.123 1.311-0.671 0.431-1.336 0.16-2.863-0.85-3.977z"></path><path d="M13.531 20.907c-0.185 0.314-0.585 0.462-0.899 0.332-0.314-0.123-0.406-0.48-0.228-0.782 0.185-0.302 0.573-0.449 0.88-0.332 0.308 0.111 0.419 0.462 0.246 0.782zM11.863 23.037c-0.505 0.806-1.588 1.157-2.401 0.788-0.8-0.363-1.040-1.299-0.536-2.087 0.499-0.782 1.545-1.133 2.352-0.794 0.819 0.351 1.084 1.28 0.585 2.093zM13.759 17.336c-2.481-0.646-5.288 0.591-6.366 2.776-1.102 2.229-0.037 4.709 2.469 5.522 2.598 0.837 5.664-0.449 6.729-2.85 1.053-2.358-0.259-4.777-2.832-5.448z"></path></symbol>
<symbol id="twitter" viewBox="0 0 32 32"><path d="M32 6.077c-1.175 0.525-2.443 0.875-3.768 1.031 1.356-0.812 2.393-2.1 2.887-3.631-1.268 0.75-2.674 1.3-4.168 1.593-1.2-1.275-2.906-2.068-4.793-2.068-3.624 0-6.561 2.937-6.561 6.561 0 0.512 0.056 1.012 0.169 1.493-5.455-0.275-10.292-2.887-13.529-6.861-0.562 0.969-0.887 2.1-0.887 3.299 0 2.275 1.156 4.287 2.918 5.461-1.075-0.031-2.087-0.331-2.974-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.262 5.836 5.268 6.436-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.837 2.606 3.262 4.505 6.13 4.562-2.25 1.762-5.074 2.812-8.155 2.812-0.531 0-1.050-0.031-1.568-0.094 2.912 1.868 6.361 2.949 10.067 2.949 12.073 0 18.678-10.004 18.678-18.678 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.393-2.075 3.274-3.393z"></path></symbol>
<symbol id="chevron-left" viewBox="0 0 28 28">
<path d="M22.603 4.845l-9.155 9.155 9.155 9.155c0.431 0.431 0.431 1.121 0 1.552l-2.862 2.862c-0.431 0.431-1.121 0.431-1.552 0l-12.793-12.793c-0.431-0.431-0.431-1.121 0-1.552l12.793-12.793c0.431-0.431 1.121-0.431 1.552 0l2.862 2.862c0.431 0.431 0.431 1.121 0 1.552z"></path>
</symbol>
<symbol id="chevron-right" viewBox="0 0 28 28">
<path d="M22.603 14.776l-12.793 12.793c-0.431 0.431-1.121 0.431-1.552 0l-2.862-2.862c-0.431-0.431-0.431-1.121 0-1.552l9.155-9.155-9.155-9.155c-0.431-0.431-0.431-1.121 0-1.552l2.862-2.862c0.431-0.431 1.121-0.431 1.552 0l12.793 12.793c0.431 0.431 0.431 1.121 0 1.552z"></path>
</symbol>
<symbol id="edit" viewBox="0 0 32 32"><path d="M5 0c-2.761 0-5 2.239-5 5 0 1.126 0.372 2.164 1 3l2 2 7-7-2-2c-0.836-0.628-1.874-1-3-1zM30 23l2 9-9-2-18.5-18.5 7-7 18.5 18.5zM9.638 11.362l14 14 1.724-1.724-14-14-1.724 1.724z"></path></symbol>
<symbol id="remove" viewBox="0 0 32 32"><path d="M5 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM11 28h-2v-14h2v14zM15 28h-2v-14h2v14zM19 28h-2v-14h2v14zM23 28h-2v-14h2v14z"></path><path d="M27.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM19 4h-6v-1.975h6v1.975z"></path></symbol>
<symbol id="comment" viewBox="0 0 32 32">
<path d="M32 20.571c0 2.5-1.25 5.768-2.268 8.054-0.196 0.411-0.393 0.982-0.661 1.357-0.125 0.179-0.25 0.304-0.5 0.304-0.357 0-0.571-0.286-0.571-0.625 0-0.286 0.071-0.607 0.089-0.893 0.054-0.732 0.089-1.464 0.089-2.196 0-8.518-5.054-10-12.75-10h-4v4.571c0 0.625-0.518 1.143-1.143 1.143-0.304 0-0.589-0.125-0.804-0.339l-9.143-9.143c-0.214-0.214-0.339-0.5-0.339-0.804s0.125-0.589 0.339-0.804l9.143-9.143c0.214-0.214 0.5-0.339 0.804-0.339 0.625 0 1.143 0.518 1.143 1.143v4.571h4c5.857 0 13.143 1.036 15.625 7.196 0.75 1.893 0.946 3.946 0.946 5.946z"></path>
</symbol>
<symbol id="chevron-up" viewBox="0 0 32 32">
<path d="M31.507 22.571l-3.271 3.251c-0.493 0.493-1.281 0.493-1.773 0l-10.463-10.463-10.463 10.463c-0.493 0.493-1.281 0.493-1.773 0l-3.271-3.251c-0.493-0.493-0.493-1.3 0-1.793l14.621-14.601c0.493-0.493 1.281-0.493 1.773 0l14.621 14.601c0.493 0.493 0.493 1.3 0 1.793z"></path>
</symbol>
</defs>
</svg>`)